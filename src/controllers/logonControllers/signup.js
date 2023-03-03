import * as LogonRepository from "../../repositories/logon.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await LogonRepository.insert(name, email, bcrypt.hashSync(password, 10));
    res.sendStatus(201);
  } catch (error) {
    if (error.code == 23505) {
      return res.status(409).send(error.message);
    }
    res.status(500).send(error.message);
  }
};
