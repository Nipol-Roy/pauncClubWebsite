"use client";
import nodemailer from "nodemailer";

export default async function handaler(req, res) {
  if (req.method !== "POST") {
    return res.status(504).json({ message: "Method Not Allowed" });
  }

  let { fullName, email, phone, message } = req.body;

  if (!fullName || !email || !phone || !message) {
    return res.status(405).json({ message: " All field are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nipolroy5@gmail.com",
        pass: "Nipol284566",
      },
    });
    await transporter.sendMail({
      from: "email",
      to: "nipolroy5@gmail.com",
      subject: `New contract message from ${fullName}`,
      html: `
         <p><strong>FullName:</strong> ${fullName}</p>
         <p><strong>Email: </strong> ${email}</p>
         <p> <strong>Phone:</strong> ${message}</p>

        `,
        
    });

    return res.status(200).json({message:"Message Send Sucessfull"})
  } catch(err) {
    return res.status(500).json({message:"Message Send Failed"})
  }
}
