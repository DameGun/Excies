import { body } from "express-validator";
import { guidParamValidator } from "./generic/params.validator.js";

const createValidator = {
  errMessage: "Error occured while validating create request data",
  chain: [
    body(
      "activity_id",
      "Reference field to activity must be a number"
    ).isNumeric(),
    body(["start_time", "end_time"], "Value must be date/time")
      .if((value) => value)
      .isISO8601(),
    body("calories", "Calories cannot be empty or less then zero")
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
