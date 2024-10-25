import { query } from "../database/sqlite.js"

async function toList(name) {
  let filtro = [];

  let sql = "Select * from doctors ";
  if (name) {
    sql = sql + "where name like ? ";
    filtro.push("%" + name + "%");
  }
  sql = sql + "order by name";

  const doctors = await query(sql, filtro);
  return doctors;
}

async function toInsert(name, specialty, icon) {
  let sql = `insert into doctors(name, specialty, icon) values(?, ?, ?)
  returning id_doctor`;

  const doctor = await query(sql, [name, specialty, icon]);
  return doctor[0];
}

async function toEdit(id_doctor, name, specialty, icon) {
  let sql = `update doctors set name=?, specialty=?, icon=?
where id_doctor = ?`;

  await query(sql, [name, specialty, icon, id_doctor]);
  return { id_doctor };
}

async function toDelete(id_doctor) {
  let sql = `delete from doctors where id_doctor = ?`;

  await query(sql, [id_doctor]);
  return { id_doctor };
}

async function toListServices(id_doctor) {
  let sql = `select d.id_service, s.description, d.price
  from doctors_services d
  join services s on (s.id_service = d.id_service)
  where d.id_doctor = ?
  order by s.description`;

  const serv = await query(sql, [id_doctor]);
  return serv;
}

export default { toList, toInsert, toEdit, toDelete, toListServices };