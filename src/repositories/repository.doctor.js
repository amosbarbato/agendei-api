import { query } from "../database/sqlite.js"

async function list() {

  let sql = "Select * from doctors order by name"

  const doctors = await query(sql, [])
  return doctors
}

export default { list }