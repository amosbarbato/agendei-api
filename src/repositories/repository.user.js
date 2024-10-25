import { query } from "../database/sqlite.js";

async function toInsert(name, email, password) {
  let sql = `insert into users(name, email, password) values(?, ?, ?) returning id_user`;

  const user = await query(sql, [name, email, password]);
  return user[0];
}

export default { toInsert };
