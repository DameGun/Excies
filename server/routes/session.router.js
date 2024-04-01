import { Router } from "express";
import sessionController from "../controllers/session.controller.js";
import validate from '../utilities/validators/customValidator.js';
import { createValidator, updateValidator, paramValidator } from "../utilities/validators/session.validatior.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(sessionController.findAll)
  .post(validate(createValidator), sessionController.create);
router
  .route("/:session_id")
  .get(validate(paramValidator('session_id')), sessionController.findByPk)
  .patch(validate(updateValidator), sessionController.update)
  .delete(validate(paramValidator('session_id')), sessionController.destroy);

export default router;