import serviceDoctor from "../services/service.doctor.js"

async function toList(req, res) {
  const name = req.query.name;

  const doctors = await serviceDoctor.toList(name);
  res.status(200).json(doctors);
}

async function toInsert(req, res) {
  const { name, specialty, icon } = req.body;

  const doctor = await serviceDoctor.toInsert(name, specialty, icon);
  res.status(201).json(doctor);
}

async function toEdit(req, res) {
  const id_doctor = req.params.id_doctor;
  const { name, specialty, icon } = req.body;

  const doctor = await serviceDoctor.toEdit(id_doctor, name, specialty, icon);
  res.status(200).json(doctor);
}

async function toDelete(req, res) {
  const id_doctor = req.params.id_doctor;

  const doctor = await serviceDoctor.toDelete(id_doctor);
  res.status(200).json(doctor);
}

async function toListServices(req, res) {
  const id_doctor = req.params.id_doctor;

  const serv = await serviceDoctor.toListServices(id_doctor);
  res.status(200).json(serv);
}

export default { toList, toInsert, toEdit, toDelete, toListServices };