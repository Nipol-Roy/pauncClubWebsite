import { NextResponse } from "next/server";
import User from "../../../../model/DB/crud/User";
import connectDB from "../../connectDB/mongoConnection";

export async function GET(request) {
  try {
    
    console.log("Connecting to database...");
    await connectDB();
    console.log("Database connected");
    
    const session = request.nextUrl.searchParams.get("session");
    console.log("Session received:", session);

    let members;

    if (session && session.trim() !== "") {
      members = await User.find({ session: session.trim() });
    } else {
   
      members = await User.find();
    }

    console.log("Number of members found:", members.length);


    return NextResponse.json({ success: true, message: members });
  } catch (error) {
   
    console.error("Error in API:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: 500 }
    );
  }
}
