import { Router } from "express";
import exerciseTranslatedController from "../controllers/exerciseTranslated.controller.js";
import validate from "../utilities/validators/customValidator.js";
import { paramValidator } from "../utilities/validators/exercise.validator.js";

const router = Router();

router.route("/").get(exerciseTranslatedController.findAll);
router
  .route("/details/:id")
  .get(
    validate(paramValidator("id")),
    exerciseTranslatedController.findDetailsByPk
  );

export default router;
