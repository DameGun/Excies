import { body } from "express-validator";
import { guidParamValidator } from "./generic/params.validator.js";

const createValidator = {
  errMessage: "Error occured while validating create request data",
  chain: [body("name", "Name field cannot be empty").not().isEmpty()],
};

const updateValidator = {
  ...createValidator,
  errMessage: "Error occured while validating update request data",
};

const paramValidator = (paramName) => guidParamValidator(paramName);

export { createValidator, updateValidator, paramValidator };
