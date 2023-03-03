import { Router } from "express";
import { urlById } from "../controllers/urlControllers/urlById.js";
import { urlRedirect } from "../controllers/urlControllers/urlRedirect.js";
import { urlShorten } from "../controllers/urlControllers/urlShorten.js";
import { tokenValidate } from "../middlewares/token_validation.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", tokenValidate, urlShorten);
urlRouter.get("/urls/:id", urlById);
urlRouter.get("/urls/open/:shortUrl", urlRedirect);

export default urlRouter;
