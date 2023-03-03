import db from "../config/db.js";

export const insert = async (url, user_id, shorted) => {
  return await db.query(
    `
    INSERT INTO urls (url, user_id, shorted) VALUES ($1, $2, $3) RETURNING id;`,
    [url, user_id, shorted]
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
