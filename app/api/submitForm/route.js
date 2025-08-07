/** @format */

import User from "@/model/DB/crud/User";
import { NextResponse } from "next/server";
import ConnectDB from "../connectDB/mongoConnection";

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();
    const newUser = await User.create(body);

    return new NextResponse(JSON.stringify({ success: true, data: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log("API Error:", err.messaage);
    return new NextResponse(
      JSON.stringify({ success: false, message: err.message }, { status: 500 }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
