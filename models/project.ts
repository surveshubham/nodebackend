import mongoose from "mongoose";
const { Schema } = mongoose;

const Project = new Schema({
    projectId: { type: String },
    name: {type: String},
    startedOn : {type : Date},
})

const ProjectModel = mongoose.model("Project", Project);
export default ProjectModel;