import serviceUser from "../services/service.user.js";

async function toInsert(req, res) {
  const { name, email, password } = req.body;

  const user = await serviceUser.toInsert(name, email, password);
  res.status(201).json(user);
}

async function toLogin(req, res) {
  const { email, password } = req.body;

  const user = await serviceUser.toLogin(email, password);

  if (user.length == 0)
    res.status(401).json({ error: "E-mail ou senha inválida." });
  else res.status(200).json(user);
}

export default { toInsert, toLogin };
