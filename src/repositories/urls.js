import db from "../config/db.js";

export const insert = async (url, user_id, shorted) => {
  return await db.query(
    `
    INSERT INTO urls (url, user_id, shorted) 
    VALUES ($1, $2, $3) 
    RETURNING id;`,
    [url, user_id, shorted]
  );
};

export const selectById = async (id) => {
  return await db.query(
    `
    SELECT id, shorted AS "shortedUrl", url 
    FROM urls 
    WHERE id = $1 ;
    `,
    [id]
  );
};

export const redirectUrl = async (shorted) => {
  return await db.query(
    `
      UPDATE urls 
      SET times_visited = times_visited + 1 
      WHERE shorted = $1 
      RETURNING url;
      `,
    [shorted]
  );
};

export const deletetUrl = async (id, email) => {
  return await db.query(
    `
    DELETE FROM urls 
        WHERE id = $1 
        AND user_id = (
            SELECT id 
            FROM users 
            WHERE email = $2);
        `,
    [id, email]
  );
};
