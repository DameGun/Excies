import { Router } from "express";
import musclesController from "../controllers/muscles.controller.js";

const router = Router();

router.route("/").get(musclesController.findAll).post(musclesController.create);
router
  .route("/:id")
  .get(musclesController.findByPk)
  .put(musclesController.update)
  .delete(musclesController.destroy);

export default router;
