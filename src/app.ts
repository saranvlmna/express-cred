import cors from "cors";
import express, { Express } from "express";
import { authRouter, serverRouter } from "./router";
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", serverRouter);
app.use("/user", authRouter);

export { app };
