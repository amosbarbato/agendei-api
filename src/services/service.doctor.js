import repoDoctor from "../repositories/repository.doctor.js"

async function toList(name) {
  const doctors = await repoDoctor.toList(name);

  return doctors;
}

async function toInsert(name, specialty, icon) {
  const doctor = await repoDoctor.toInsert(name, specialty, icon);

  return doctor;
}

async function toEdit(id_doctor, name, specialty, icon) {
  const doctor = await repoDoctor.toEdit(id_doctor, name, specialty, icon);

  return doctor;
}

async function toDelete(id_doctor) {
  const doctor = await repoDoctor.toEdit(id_doctor);

  return doctor;
}

async function toListServices(id_doctor) {
  const serv = await repoDoctor.toListServices(id_doctor);

  return serv;
}

export default { toList, toInsert, toEdit, toDelete, toListServices };