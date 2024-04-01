import { Router } from "express";
import exerciseListController from "../controllers/exerciseList.controller.js";
import validate from '../utilities/validators/customValidator.js';
import { createValidator, updateValidator, paramValidator } from "../utilities/validators/exerciseList.validator.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(exerciseListController.findAll)
  .post(validate(createValidator), exerciseListController.create);
router
  .route("/:list_id")
  .get(validate(paramValidator('list_id')), exerciseListController.findByPk)
  .patch(validate(updateValidator), exerciseListController.update)
  .delete(validate(paramValidator('list_id')), exerciseListController.destroy);

export default router;