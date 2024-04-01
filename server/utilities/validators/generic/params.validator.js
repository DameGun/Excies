import { param } from "express-validator";

function intParamValidator(paramName) {
  return {
    errMessage: "Error occured while validating params",
    chain: [
      param(`${paramName}`, "Id parameter should be a number").isNumeric(),
    ],
  };
}

function guidParamValidator(paramName) {
  return {
    errMessage: "Error occured while validating params",
    chain: [
      param(`${paramName}`, "Id parameter should be a uuid type").isUUID(),
    ],
  };
}

export { intParamValidator, guidParamValidator };
