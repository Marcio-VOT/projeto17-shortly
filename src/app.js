import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dataRouter from "./routes/dataRouter.js";
import logonRouter from "./routes/logonRouter.js";
import urlRouter from "./routes/urlRouter.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use([dataRouter, logonRouter, urlRouter]);

app.listen(
  port,
  console.log(`Servidor iniciado com sucesso! Na porta: ${port}`)
);
