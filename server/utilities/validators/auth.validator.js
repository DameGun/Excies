import { body } from "express-validator";

const registerValidator = {
  errMessage: "Error occured while validating register request data",
  chain: [
    body("username", "Username should be provided").exists(),
    body(
      "password",
      "Password should be provided"
    ).exists(),
    body("email", "Invalid email")
      .if((value) => value)
      .isEmail(),
  ],
};

const loginValidator = {
  errMessage: "Error occured while validating login request data",
  chain: [
    body("username", "Username should be provided").exists(),
    body("password", "Password should be provided").exists(),
  ],
};

export { registerValidator, loginValidator };
