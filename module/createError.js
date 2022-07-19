function createError(errMessage, errCode) {
  const error = new Error(errMessage);
  error.statusCode = errCode;
  return error;
}

module.exports = { createError };
