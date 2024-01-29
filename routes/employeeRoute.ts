import express from "express";
import { createEmployee, assignProjectToEmp} from "../controllers/empController";
import dotenv from "dotenv";
dotenv.config();


const router = express.Router();

router.post("/createEmployee", createEmployee);
router.post("/assignProject" , assignProjectToEmp );

export = router;

