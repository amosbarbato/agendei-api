import serviceUser from "../services/service.user.js";

async function toInsert(req, res) {
  const { name, email, password } = req.body;

  const user = await serviceUser.toInsert(name, email, password);
  res.status(201).json(user);
}

export default { toInsert };
