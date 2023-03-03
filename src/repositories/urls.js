import db from "../config/db.js";

export const insert = async (url, user_id, shorted) => {
  return await db.query(
    `
    INSERT INTO urls (url, user_id, shorted) VALUES ($1, $2, $3) RETURNING id;`,
    [url, user_id, shorted]
  );
};

export const selectById = async (id) => {
  return await db.query(
    `
    SELECT id, shorted AS "shortedUrl", url FROM urls WHERE id = $1 ;
    `,
    [id]
  );
};
