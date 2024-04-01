import { body } from "express-validator";
import { guidParamValidator } from "./generic/params.validator.js";

const createValidator = {
  errMessage: "Error occured while validating create request data",
  chain: [
    body("session_id", "Reference field to session must be uuid")
      .if((value) => value)
      .isNumeric(),
    body("date").isISO8601().isDate(),
    body(["rep", "weight"], "Value must be a number and greater than 0")
      .if((value) => value > 0)
      .isNumeric(),
  ],
};

const updateValidator = {
  ...createValidator,
  errMessage: "Error occured while validating update request data",
};

const paramValidator = (paramName) => guidParamValidator(paramName);

export { createValidator, updateValidator, paramValidator };
