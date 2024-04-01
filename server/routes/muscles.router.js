import { Router } from "express";
import musclesController from "../controllers/muscles.controller.js";
import validate from "../utilities/validators/customValidator.js";
import {
  createValidator,
  updateValidator,
  paramValidator,
} from "../utilities/validators/muscles.validator.js";

const router = Router();

router
  .route("/")
  .get(musclesController.findAll)
  .post(validate(createValidator), musclesController.create);
router
  .route("/:id")
  .get(validate(paramValidator("id")), musclesController.findByPk)
  .patch(validate(updateValidator), musclesController.update)
  .delete(validate(paramValidator("id")), musclesController.destroy);

export default router;
