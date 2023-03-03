import { Router } from "express";
import { userData } from "../controllers/geralDataControllers/userData.js";
import { tokenValidate } from "../middlewares/token_validation.js";

const dataRouter = Router();

dataRouter.get("/users/me", tokenValidate, userData);

export default dataRouter;
