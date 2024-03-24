import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(userController.findAll).post(userController.create);
router.route("/:username").get(userController.findOne);

export default router;
