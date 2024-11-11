import serviceAppointment from "../services/service.appointment.js";

async function toListByUser(req, res) {
  const id_user = req.id_user;

  const appointments = await serviceAppointment.toList(id_user);
  res.status(200).json(appointments);
}

async function toInsert(req, res) {
  const id_user = req.id_user;
  const { id_doctor, id_service, booking_date, booking_hour } = req.body;

  const appointment = await serviceAppointment.toInsert(
    id_user,
    id_doctor,
    id_service,
    booking_date,
    booking_hour
  );
  res.status(201).json(appointment);
}

async function toDelete(req, res) {
  const id_user = req.id_user;
  const id_appointment = req.params.id_appointment;

  const appointment = await serviceAppointment.toDelete(
    id_user,
    id_appointment
  );
  res.status(200).json(appointment);
}

export default { toListByUser, toInsert, toDelete };
