import bcrypt from "bcrypt";
import repoUser from "../repositories/repository.user.js";

async function toInsert(name, email, password) {
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await repoUser.toInsert(name, email, hashPassword);

  return user;
}

export default { toInsert };
