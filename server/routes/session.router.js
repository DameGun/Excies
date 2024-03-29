import { Router } from "express";
import sessionController from "../controllers/session.controller.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(sessionController.findAll)
  .post(sessionController.create);
router
  .route("/:session_id")
  .get(sessionController.findByPk)
  .patch(sessionController.update)
  .delete(sessionController.destroy);

export default router;