import repoDoctor from "../repositories/repository.doctor.js"

async function list() {
  const doctors = await repoDoctor.list()
  return doctors
}

export default { list }