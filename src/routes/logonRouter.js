import { Router } from "express";
import { signup } from "../controllers/logonControllers/signup.js";
import { signin } from "../controllers/logonControllers/signin.js";
import { dataValidation } from "../middlewares/data_validation.js";
import { signupSchema } from "../schemas/logon/signup.js";
import { signinSchema } from "../schemas/logon/signin.js";

const logonRouter = Router();

logonRouter.post("/signup", dataValidation(signupSchema), signup);
logonRouter.post("/signin", dataValidation(signinSchema), signin);

export default logonRouter;
