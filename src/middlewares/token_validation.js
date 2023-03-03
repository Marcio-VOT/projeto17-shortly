import jwt from "jsonwebtoken";

export const tokenValidate = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const SECRET = process.env.SECRET;
  try {
    res.locals.tokenValidation = await jwt.verify(token, SECRET);
    next();
  } catch (error) {
    res.status(401).send("Invalid Token!");
  }
};
