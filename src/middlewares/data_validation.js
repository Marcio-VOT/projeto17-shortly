export const dataValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.sendStatus(422);
    next();
  };
};
