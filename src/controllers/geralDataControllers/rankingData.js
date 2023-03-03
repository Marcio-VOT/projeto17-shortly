import * as DataRepository from "../../repositories/data.js";

export const ranking = async (req, res) => {
  try {
    const { rows } = await DataRepository.selectRank();
    res.send(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
