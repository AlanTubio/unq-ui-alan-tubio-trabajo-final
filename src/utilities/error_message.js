export const errorMessage = (error) =>
  error.response?.data?.error || "No se recibio respuesta del servidor";
