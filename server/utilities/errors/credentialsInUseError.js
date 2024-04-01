import CustomAPIError from "./customError.js";

class CredentialsInUse extends CustomAPIError {
  constructor(credentialType) {
    super(`${credentialType} already in use`);
    this.statusCode = 403;
  }
}

export default CredentialsInUse;
