class ResponseObject {
  constructor({ success, message, data, errors }) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.errors = errors;
  }
}

export default ResponseObject;
