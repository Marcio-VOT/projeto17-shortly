import db from "../config/db.js";

export const selectEmail_UrlId = async (id) => {
  return await db.query(
    `
      SELECT email 
      FROM users 
      WHERE id = (SELECT user_id FROM urls WHERE id = $1);
      `,
    [id]
  );
};

export const selectMyData = async (email) => {
  return await db.query(
    `
    SELECT users.id, users.name, SUM(urls.times_visited) AS "visitCount", 
       JSON_AGG(JSON_BUILD_OBJECT('id', urls.id, 'shortUrl', urls.shorted, 'url', urls.url, 'visitCount', urls.times_visited)) AS "shortenedUrls"
    FROM urls
    JOIN users
    ON urls.user_id = users.id
    WHERE users.email = $1
    GROUP BY users.id, users.name;
        `,
    [email]
  );
};

export const selectRank = async () => {
  return await db.query(
    `
    SELECT  
		users.id AS id, 
		users.name AS name, 
		count(urls.user_id) AS "linksCount",
		COALESCE(SUM(urls.times_visited ), 0) AS "visitCount"
		FROM users
		LEFT JOIN urls
		ON users.id = urls.user_id
		GROUP BY users.id
		ORDER BY "visitCount" DESC;
        `
  );
};
