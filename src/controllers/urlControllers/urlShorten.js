import bcrypt from "bcrypt";
import * as UrlRepository from "../../repositories/urls.js";
import * as LogonRepository from "../../repositories/logon.js";
import { nanoid } from "nanoid";

export const urlShorten = async (req, res) => {
  const { email } = res.locals.tokenValidation;
  const { url } = req.body;
  try {
    const { rows } = await LogonRepository.select(email);
    const shorted = nanoid(8);
    const returned = await UrlRepository.insert(url, rows[0].id, shorted);

    res.status(201).send({ id: returned.rows[0].id, shortUrl: shorted });
  } catch (error) {
    if (error.code == 23505) {
      return res.status(500).send("Internal Error");
    }
    res.status(500).send(error.message);
  }
};
