import bcrypt from "bcrypt";
import * as UrlRepository from "../../repositories/urls.js";

export const urlById = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await UrlRepository.selectById(id);
    console.log(id);
    if (!url.rowCount) return res.sendStatus(404);
    res.send(url.rows[0]).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
