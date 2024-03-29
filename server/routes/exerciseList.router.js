import { Router } from "express";
import exerciseListController from "../controllers/exerciseList.controller.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(exerciseListController.findAll)
  .post(exerciseListController.create);
router
  .route("/:list_id")
  .get(exerciseListController.findByPk)
  .patch(exerciseListController.update)
  .delete(exerciseListController.destroy);

export default router;