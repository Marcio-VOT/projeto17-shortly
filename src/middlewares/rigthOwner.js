import * as DataRepository from "../repositories/data.js";

export const urlOwner = async (req, res, next) => {
  const { id } = req.params;
  const { tokenValidation } = res.locals;
  try {
    const { rowCount, rows } = await DataRepository.selectEmail_UrlId(id);
    if (!rowCount) return res.sendStatus(404);
    if (rows[0].email != tokenValidation.email) return res.sendStatus(401);
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
