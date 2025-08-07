import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      memberId: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      session: {
        type: String,
        required: true,
      },
      speech: {
        type: String,
        required: true,
      },
    image: {
      type: String,
      required: true
      },
    },
    { timestamps: true }
  );

  const User = mongoose.models?.memberlist || mongoose.model("memberlist", userSchema);
  
export default User;
 