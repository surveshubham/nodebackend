import express from "express";
import { createEmployee, } from "../controllers/empController";
import dotenv from "dotenv";
dotenv.config();


const router = express.Router();

router.post("/createEmployee", createEmployee);


export = router;

