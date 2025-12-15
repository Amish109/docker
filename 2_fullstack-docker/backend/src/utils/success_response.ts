interface SuccessResponseType<T> {
  status: number;
  message: string;
  data: T[];
  error: null;
}

class SuccessResponse<T> implements SuccessResponseType<T> {
  status: number;
  message: string;
  data: T[];
  error: null;

  constructor(
    status: number = 200,
    message: string = 'Success',
    data: T[] = []
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = null;
  }
}



export default SuccessResponse;