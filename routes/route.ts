import express from "express";
import { userLogin, userSignup , getUser } from "../controllers/userController";
import { fetchuser } from "../middleware/fetchuser";
import dotenv from "dotenv";
dotenv.config();
// import { createOptions , createMcq , getMcq } from "../controllers/createMcq";

const router = express.Router();

router.post("/usersignup", userSignup);
router.post("/login", userLogin)
router.post('/getuser', fetchuser , getUser)

export = router;
     


