import express, { Express, Request, Response } from "express";
import { connectToMongo } from "./db";
import dotenv from "dotenv";
dotenv.config();
import route from "./routes/route";
const app: Express = express();
const port = 8080;

app.use(express.json());

app.use("/api", route);

// to run any api
// http://localhost:8080/api/getMcq

async function bootstrap() {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

bootstrap();
