import Joi from "joi";
export const urlCreationSchema = Joi.object({
  url: Joi.string().uri().required(),
});
