import {Router} from "express";
import empleadoController from "../controller/empleadoController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("login", empleadoController.loginEmpleado);
router.post("create", AuthMiddleware, empleadoController.createEmpleado);

export default router;