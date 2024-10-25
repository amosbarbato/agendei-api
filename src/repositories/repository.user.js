import { query } from "../database/sqlite.js";

async function toInsert(name, email, password) {
  let sql = `insert into users(name, email, password) values(?, ?, ?) returning id_user`;

  const user = await query(sql, [name, email, password]);
  return user[0];
}

async function toListByEmail(email) {
  let sql = `select * from users where email = ?`;

  const user = await query(sql, [email]);

  if (user.length == 0) return [];
  else return user[0];
}

export default { toInsert, toListByEmail };
