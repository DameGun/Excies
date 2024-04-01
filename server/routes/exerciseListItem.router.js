import { Router } from "express";
import exerciseListItemController from "../controllers/exerciseListItem.controller.js";
import validate from '../utilities/validators/customValidator.js';
import { createValidator, updateValidator, paramValidator } from "../utilities/validators/exerciseListItem.validator.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(exerciseListItemController.findAll)
  .post(validate(createValidator), exerciseListItemController.create);
router
  .route("/:item_id")
  .get(validate(paramValidator('item_id')), exerciseListItemController.findByPk)
  .patch(validate(updateValidator), exerciseListItemController.update)
  .delete(validate(paramValidator('item_id')), exerciseListItemController.destroy);

export default router;