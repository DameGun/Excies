import CustomAPIError from "./customError.js";

class WrongCredentialsError extends CustomAPIError {
  constructor() {
    super("Authentication failed");
    this.statusCode = 401;
  }
}

export default WrongCredentialsError;
