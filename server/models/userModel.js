import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  First_name: { type: String, required: true },
  Last_name: { type: String, required: true },
  Phone_number: { type: String, required: true },
  Your_email: { type: String, required: true },
  Password: { type: String, required: true },
});


export default mongoose.model("User", userSchema)