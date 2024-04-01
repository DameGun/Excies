import { validationResult } from "express-validator";

export default function validate(validator) {
  return async (req, res, next) => {
    for (let validation of validator.chain) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }

    return next({ message: validator.errMessage, errors: result.errors });
  };
}
