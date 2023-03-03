import { Router } from "express";
import { ranking } from "../controllers/geralDataControllers/rankingData.js";
import { userData } from "../controllers/geralDataControllers/userData.js";
import { tokenValidate } from "../middlewares/token_validation.js";

const dataRouter = Router();

dataRouter.get("/users/me", tokenValidate, userData);
dataRouter.get("/ranking", ranking);

export default dataRouter;
