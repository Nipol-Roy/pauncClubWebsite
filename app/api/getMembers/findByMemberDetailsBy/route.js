import Member from "../../../../model/DB/crud/User";
import connectDB from "../../connectDB/mongoConnection";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectDB();
    const member = await Member.findById(id);

    if (!member) {
      return Response.json({ success: false, message: "Member not found" }, { status: 404 });
    }

    return Response.json({ success: true, message: member });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}
