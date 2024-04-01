import { Router } from "express";
import exerciseController from "../controllers/exercise.controller.js";
import validate from "../utilities/validators/customValidator.js";
import {
  createValidator,
  updateValidator,
  paramValidator,
} from "../utilities/validators/exercise.validator.js";

const router = Router();

router
  .route("/")
  .get(exerciseController.findAll)
  .post(validate(createValidator), exerciseController.create);
router
  .route("/:id")
  .get(validate(paramValidator("id")), exerciseController.findByPk)
  .patch(validate(updateValidator), exerciseController.update)
  .delete(validate(paramValidator("id")), exerciseController.destroy);

export default router;
