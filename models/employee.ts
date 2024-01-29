import mongoose from "mongoose";
const { Schema } = mongoose;

const Employee = new Schema({
    employeeId: { type: String },
    fNAme: {type: String},
    lName: { type: String },
    departmentId : { type: String },
    onBoardDate : {type : Date},
    age : {type : Number},
    projectId: [{type : String}]
})

const EmployeeModel = mongoose.model("Employee", Employee);
export default EmployeeModel;