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

export default { toList, toInsert };
