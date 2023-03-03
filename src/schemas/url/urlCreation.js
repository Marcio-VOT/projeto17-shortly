import Joi from "joi";

export const urlCreationSchema = Joi.object({
  url: joi.string().uri().required(),
});
