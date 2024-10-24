import { Router } from "express";
import controlerDoctor from "../controllers/controllers.doctor.js"

const router = Router()

router.get("/ping", (req, res) => {
  console.log("Executou o PING")
  res.json({ pong: true })
})

router.get("/doctors", controlerDoctor.list)

export default router