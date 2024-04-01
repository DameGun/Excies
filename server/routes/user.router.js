import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.route("/users").get(userController.findAll)
router.route("/:username").get(userController.findOne);

export default router;
