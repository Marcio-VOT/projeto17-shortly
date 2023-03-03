import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as LogonRepository from "../../repositories/logon.js";

const SECRET = process.env.SECRET;

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await LogonRepository.select(email);

    if (!user.rowCount || !bcrypt.compareSync(password, user.rows[0].password))
      return res.sendStatus(401);

    const token = jwt.sign({ email, password }, SECRET, {
      expiresIn: "1 day",
    });
    jwt.verify(token, SECRET);
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// const token = jwt.sign({ id: some_id, email: some_email }, SECRET, {
//   expiresIn: "3 days",
// });

// var decoded = jwt.verify(token, SECRET);
