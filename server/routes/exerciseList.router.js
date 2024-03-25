import { Router } from "express";
import exerciseListController from "../controllers/exerciseList.controller.js";

const router = Router();

router
  .route("/:username")
  .get(exerciseListController.findAll)
  .post(exerciseListController.create);
router
  .route("/:username/lists/:list_id")
  .get(exerciseListController.findByPk)
  .patch(exerciseListController.update)
  .delete(exerciseListController.destroy);

export default router;