import * as DataRepository from "../../repositories/data.js";

export const userData = async (req, res) => {
  const { tokenValidation } = res.locals;

  try {
    res
      .send((await DataRepository.selectMyData(tokenValidation.email)).rows[0])
      .status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
