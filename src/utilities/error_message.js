export const errorMessage = (error) =>
  error.response?.data.message || "No response received from the server";
