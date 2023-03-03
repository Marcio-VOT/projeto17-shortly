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
