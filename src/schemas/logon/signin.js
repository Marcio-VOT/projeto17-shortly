import Joi from "joi";

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(32).required(),
});
