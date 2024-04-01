import { body } from "express-validator";

const registerValidator = {
  errMessage: "Error occured while validating register request data",
  chain: [
    body("username", "Username should be provided").exists(),
    body(
      "password",
      "Password must contain at least 8 symbols and 1 letter"
    ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
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
