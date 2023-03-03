import { Router } from "express";
import { urlById } from "../controllers/urlControllers/urlById.js";
import { urlDelete } from "../controllers/urlControllers/urlDelet.js";
import { urlRedirect } from "../controllers/urlControllers/urlRedirect.js";
import { urlShorten } from "../controllers/urlControllers/urlShorten.js";
import { dataValidation } from "../middlewares/data_validation.js";
import { urlOwner } from "../middlewares/rigthOwner.js";
import { tokenValidate } from "../middlewares/token_validation.js";
import { urlCreationSchema } from "../schemas/url/urlCreation.js";

const urlRouter = Router();

urlRouter.post(
  "/urls/shorten",
  tokenValidate,
  dataValidation(urlCreationSchema),
  urlShorten
);
urlRouter.get("/urls/:id", urlById);
urlRouter.get("/urls/open/:shortUrl", urlRedirect);
urlRouter.delete("/urls/:id", tokenValidate, urlOwner, urlDelete);

export default urlRouter;
