import { Router } from "express";
import exerciseListItemController from "../controllers/exerciseListItem.controller.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(exerciseListItemController.findAll)
  .post(exerciseListItemController.create);
router
  .route("/:item_id")
  .get(exerciseListItemController.findByPk)
  .patch(exerciseListItemController.update)
  .delete(exerciseListItemController.destroy);

export default router;