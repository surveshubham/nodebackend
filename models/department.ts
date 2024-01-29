import mongoose from "mongoose";
const { Schema } = mongoose;

const Department = new Schema({
    departmentId: { type: String },
    name: {type: String},
    createdOn : {type : Date},
})

const DepartmentModel = mongoose.model("Department", Department);
export default DepartmentModel;