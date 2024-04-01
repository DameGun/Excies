import { Router } from "express";
import detailedExerciseListItemController from "../controllers/detailedExerciseListItem.controller.js";
import validate from '../utilities/validators/customValidator.js';
import { createValidator, updateValidator, paramValidator } from "../utilities/validators/detailedExerciseListItems.validator.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(detailedExerciseListItemController.findAll)
  .post(validate(createValidator), detailedExerciseListItemController.create);
router
  .route("/:detailed_id")
  .get(validate(paramValidator('detailed_id')), detailedExerciseListItemController.findByPk)
  .patch(validate(updateValidator), detailedExerciseListItemController.update)
  .delete(validate(paramValidator('detailed_id')), detailedExerciseListItemController.destroy);

export default router;