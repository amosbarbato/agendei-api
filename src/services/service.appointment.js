import repoAppointment from "../repositories/repository.appointment.js";

async function toList(id_user) {
  const appointments = await repoAppointment.toList(id_user);

  return appointments;
}

async function toInsert(
  id_user,
  id_doctor,
  id_service,
  booking_date,
  booking_hour
) {
  const appointment = await repoAppointment.toInsert(
    id_user,
    id_doctor,
    id_service,
    booking_date,
    booking_hour
  );

  return appointment;
}

async function toDelete(id_user, id_appointment) {
  const appointment = await repoAppointment.toDelete(id_user, id_appointment);

  return appointment;
}

export default { toList, toInsert, toDelete };
