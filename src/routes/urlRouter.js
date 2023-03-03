import { Router } from "express";
import { urlShorten } from "../controllers/urlControllers/urlShorten.js";
import { tokenValidate } from "../middlewares/token_validation.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", tokenValidate, urlShorten);

export default urlRouter;
