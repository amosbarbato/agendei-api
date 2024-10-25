import bcrypt from "bcrypt";
import repoUser from "../repositories/repository.user.js";
import jwt from "../utils/token.js";

async function toInsert(name, email, password) {
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await repoUser.toInsert(name, email, hashPassword);

  user.token = jwt.CreateToken(user.id_user);

  return user;
}

async function toLogin(email, password) {
  const user = await repoUser.toListByEmail(email);

  if (user.length == 0) return [];
  else {
    if (await bcrypt.compare(password, user.password)) {
      delete user.password;

      user.token = jwt.CreateToken(user.id_user);

      return user;
    } else return [];
  }
}

async function toProfile(id_user) {
  const user = await repoUser.toProfile(id_user);

  return user;
}

export default { toInsert, toLogin, toProfile };
