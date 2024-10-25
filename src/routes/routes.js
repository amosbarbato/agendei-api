import { Router } from "express";
import controllerDoctor from "../controllers/controllers.doctor.js";
import controllersUser from "../controllers/controllers.user.js";
import jwt from "../utils/token.js";

const router = Router();

// doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.toList);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.toInsert);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.toEdit);
router.delete(
  "/doctors/:id_doctor",
  jwt.ValidateToken,
  controllerDoctor.toDelete
);
router.get(
  "/doctors/:id_doctor/services",
  jwt.ValidateToken,
  controllerDoctor.toListServices
);

// users
router.post("/users/register", controllersUser.toInsert);
router.post("/users/login", controllersUser.toLogin);


export default router