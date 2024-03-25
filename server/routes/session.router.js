import { Router } from "express";
import sessionController from "../controllers/session.controller.js";

const router = Router();

router
  .route("/:username")
  .get(sessionController.findAll)
  .post(sessionController.create);
router
  .route("/:username/:session_id")
  .get(sessionController.findByPk)
  .patch(sessionController.update)
  .delete(sessionController.destroy);

export default router;