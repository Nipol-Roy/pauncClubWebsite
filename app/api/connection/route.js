/** @format */

import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return Response.status(405).json({ message: "Method Not Allowed" });
  }

  let { fullName, email, phone, message } = await req.json();

  if (!fullName || !email || !phone || !message) {
    return new Response(
      JSON.stringify({ message: " All field are required" }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New contract message from ${fullName}`,
      html: `
         <p><strong>FullName:</strong> ${fullName}</p>
         <p><strong>Email: </strong> ${email}</p>
         <p> <strong>Phone:</strong> ${phone}</p>
          <p> <strong>Message:</strong> ${message}</p>
        `,
    });

    return new Response(
      JSON.stringify({ message: "message sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Message failed to send." }),
      { status: 500 }
    );
  }
}
