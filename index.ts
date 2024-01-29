import express, { Express, Request, Response } from "express";
import { connectToMongo } from "./db";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/userRoute";
import employeeRoute from "./routes/employeeRoute";
import departmentRoute from "./routes/departmentRoute";

const app: Express = express();
const port = 8080;

app.use(express.json());


//user api
app.use("/api", userRoute);

//employee Api
app.use("/api2", employeeRoute);

//Department Api
app.use("/api3", departmentRoute);


// to run any api
// http://localhost:8080/api/getMcq

async function bootstrap() {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

bootstrap();
