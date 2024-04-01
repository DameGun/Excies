import CustomAPIError from "./customError.js";

class NotFoundError extends CustomAPIError {
  constructor(type, id) {
    super(`No entity type of ${type} found with id ${id}`);
    this.statusCode = 404;
  }
}

export default NotFoundError;
