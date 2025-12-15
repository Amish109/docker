interface ErrorResponseType {
  status: number;
  message: string;
  data: null;
  error: string;
}

class ErrorResponse extends Error implements ErrorResponseType {
  status: number;
  message: string;
  data: null;
  error: string;

  constructor(
    message: string,
    status: number = 500
  ) {
    super(message);

    this.status = status;
    this.message = message;
    this.data = null;
    this.error = message;

    Object.setPrototypeOf(this, ErrorResponse.prototype);
  }
}

export default ErrorResponse;
