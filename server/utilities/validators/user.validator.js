import { body } from "express-validator";

const updateValidator = {
  errMessage: "Error occured while validating update request data",
  chain: [
    body(
      "is_metric_system_choosed",
      "IsMetricSystemChoosed field must be boolean"
    ).isBoolean(),
  ],
};

export { updateValidator };
