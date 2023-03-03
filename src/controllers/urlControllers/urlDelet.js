import * as UrlRepository from "../../repositories/urls.js";

export const urlDelete = async (req, res) => {
  const { id } = req.params;
  const { tokenValidation } = res.locals;
  try {
    const { rowCount } = await UrlRepository.deletetUrl(
      id,
      tokenValidation.email
    );
    if (!rowCount) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
