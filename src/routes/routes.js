import { Router } from "express";
import controllerDoctor from "../controllers/controllers.doctor.js";
import controllersUser from "../controllers/controllers.user.js";

const router = Router();

// doctors
router.get("/doctors", controllerDoctor.toList);
router.post("/doctors", controllerDoctor.toInsert);
router.put("/doctors/:id_doctor", controllerDoctor.toEdit);
router.delete("/doctors/:id_doctor", controllerDoctor.toDelete);
router.get("/doctors/:id_doctor/services", controllerDoctor.toListServices);

// users
router.post("/users/register", controllersUser.toInsert);


export default router