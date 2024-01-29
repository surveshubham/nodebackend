import express from "express";

import dotenv from "dotenv";
import { createDepartment } from "../controllers/depController";
dotenv.config();


const router = express.Router();

router.post("/createDepartment", createDepartment);


export = router;

