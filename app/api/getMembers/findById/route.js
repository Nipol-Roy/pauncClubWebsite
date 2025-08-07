import User from "@/model/DB/crud/User";
import ConnectDB from "../../connectDB/mongoConnection";
export async function GET(req) {
    try {
        await ConnectDB();
      
        const { searchParams } = new URL(req.url)
        const memberId = searchParams.get("memberId");

        if (!memberId) {
            return new Response(JSON.stringify({ error: "Missing MemberId" }), {status:400});
        }

        const member = await User.findOne({  memberId })
        if (!member) {
            return new Response(JSON.stringify({ error: " Member Not Found" }), { status: 400 });
        }

        return new Response(JSON.stringify({member}),{status:200} )
    } catch (err) {
        return new Response(JSON.stringify({error: "Server Error", Details:err.message}),{status:500})
    }
}