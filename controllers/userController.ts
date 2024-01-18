import bcrypt from "bcryptjs";
import UserModel from "../models/user";
import dotenv from "dotenv";
dotenv.config();
let jwt = require("jsonwebtoken");
import { Request, Response } from "express";
const JWT_SECRET = process.env.JWT_SECRET;


//create a new user
export const userSignup = async (req: Request, res: Response) => {
    try {
      const { name, email, password }: any = req.body;
  
      let user = await UserModel.findOne({ email: email });
  
      if (user) {
        return res.json({
          error: "A user with this email already exists.Please try logging in.",
        });
      }
  
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
  
      user = await UserModel.create({
        name: name,
        email: email,
        password: secPass,
      });
    
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);


      //show success message here;
      res.json({ authtoken });
      
    } catch (error: any) {
      console.log("Error in signup : ", error.toString());
      res
        .sendStatus(500)
        .json({ error: "Something went wrong, please try again later" });
      return;
    }
  };
  


  // Authencticate using authtoken / login
export const userLogin = async (req: any, res: Response) => {
    try {
      const { email, password }: any = req.body;
  
      let user: any = await UserModel.findOne({ email });
  
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
  
      //creating password using bcryptjs
      const passwordCompare = await bcrypt.compare(password, user.password);
  
      //if not password then throw error
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
  
      //creating a data to convert it in auth token
      const data = {
        user: {
          id: user.id,
        },
      };
  
      //create a new auth token
      const authtoken = jwt.sign(data, JWT_SECRET);
  
      res.json({ authtoken });

    } catch (error: any) {
      console.log("Error in meeting : ", error.toString());
      res
        .status(500)
        .json({ error: "Something went wrong, please try again later" });
      return;
    }
  };


  // To loggin using auth token
export const getUser = async (req: any, res: Response) => {
    try {
      let userId = req.user.id;
  
      const user = await UserModel.findById(userId).select("-password");
  
      let name = user?.name;
  
      let email = user?.email;
  
      res.send({ name: name, email: email });
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  };
  