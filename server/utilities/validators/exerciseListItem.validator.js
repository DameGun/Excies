import { body } from "express-validator";
import { guidParamValidator } from "./generic/params.validator.js";

const createValidator = {
  errMessage: "Error occured while validating create request data",
  chain: [
    body(
      "exercise_id",
      "Reference field to exercise must be an integer"
    ).isNumeric(),
  ],
};

const updateValidator = {
  ...createValidator,
  errMessage: "Error occured while validating update request data",
};

const paramValidator = (paramName) => guidParamValidator(paramName);

export { createValidator, updateValidator, paramValidator };
