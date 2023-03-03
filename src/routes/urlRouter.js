import { Router } from "express";
import { urlById } from "../controllers/urlControllers/urlById.js";
import { urlShorten } from "../controllers/urlControllers/urlShorten.js";
import { tokenValidate } from "../middlewares/token_validation.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", tokenValidate, urlShorten);
urlRouter.get("/urls/:id", urlById);
export default urlRouter;
