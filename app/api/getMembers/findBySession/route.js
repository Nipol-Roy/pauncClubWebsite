import { NextResponse } from "next/server";
import User from "../../../../model/DB/crud/User";
import connectDB from "../../connectDB/mongoConnection";

export async function GET(request) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const session = searchParams.get("session");

    let members = [];

    if (session && typeof session === "string" && session.trim() !== "") {
      members = await User.find({ session: session.trim() });
    } else {
      members = await User.find();
    }

    return NextResponse.json({ success: true, message: members });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: 500 }
    );
  }
}
