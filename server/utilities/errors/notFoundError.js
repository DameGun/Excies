import CustomAPIError from './customError.js';

class NotFoundError extends CustomAPIError {
    constructor(type, id) {
        super(`No entity ${type} found with id ${id}`);
        this.statusCode = 400;
    }
}

export default NotFoundError;