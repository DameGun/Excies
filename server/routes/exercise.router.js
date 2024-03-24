import { Router } from "express";
import exerciseController from "../controllers/exercise.controller.js";

const router = Router();

router
  .route("/")
  .get(exerciseController.findAll)
  .post(exerciseController.create);
router
  .route("/:id")
  .get(exerciseController.findByPk)
  .patch(exerciseController.update)
  .delete(exerciseController.destroy);

export default router;
