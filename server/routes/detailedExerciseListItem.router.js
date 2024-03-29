import { Router } from "express";
import detailedExerciseListItemController from "../controllers/detailedExerciseListItem.controller.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(detailedExerciseListItemController.findAll)
  .post(detailedExerciseListItemController.create);
router
  .route("/:detailed_id")
  .get(detailedExerciseListItemController.findByPk)
  .patch(detailedExerciseListItemController.update)
  .delete(detailedExerciseListItemController.destroy);

export default router;