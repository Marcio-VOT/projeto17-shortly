import bcrypt from "bcrypt";
import * as UrlRepository from "../../repositories/urls.js";

export const urlRedirect = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await UrlRepository.redirectUrl(shortUrl);
    if (!url.rowCount) return res.sendStatus(404);
    res.redirect(url.rows[0].url);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
