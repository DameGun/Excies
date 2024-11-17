import { Router } from "express";
import userController from "../controllers/user.controller.js";
import validate from "../utilities/validators/customValidator.js";
import { updateValidator } from "../utilities/validators/user.validator.js";

const router = Router();

router.route("/users").get(userController.findAll);
router
  .route("/:username")
  .get(userController.findOne)
  .patch(validate(updateValidator), userController.update);

export default router;
