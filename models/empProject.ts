import mongoose from "mongoose";
const { Schema } = mongoose;

const Employee_Project_Tracker = new Schema({
    projectId: { type: String },
    employeeId: {type: String},
    joined : {type : Date},
    exit : {type : Date},
})

const Employee_Project_TrackerModel = mongoose.model("Employee_Project_Tracker", Employee_Project_Tracker);
export default Employee_Project_TrackerModel;