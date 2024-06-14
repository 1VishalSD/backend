class ApiError extends Error {
  constructor(
    statusCode,
    massage = "Something Went wrong",
    error = [],
    statck = ""
  ) {
    super(massage);
    this.statusCode = statusCode;
    this.data = null;
    this.massage = massage;
    this.success = false;
    this.error = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
