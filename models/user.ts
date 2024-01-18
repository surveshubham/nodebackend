import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
    name: { type: String },
    email: {type: String},
    password: { type: String },
})

const UserModel = mongoose.model("Users", User);
export default UserModel;