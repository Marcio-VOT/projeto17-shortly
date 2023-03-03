import db from "../config/db.js";

export const insert = async (name, email, password) => {
  await db.query(
    `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
    [name, email, password]
  );
};

export const select = async (email) => {
  return await db.query(
    `
    SELECT * FROM users WHERE email = $1 ;
    `,
    [email]
  );
};
