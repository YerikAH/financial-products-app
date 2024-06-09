export function getErrorMessage(status: number) {
  type ErrorMessages = {
    [key: number]: string;
  };
  const errorMessages: ErrorMessages = {
    400: 'Hubo un problema con la solicitud. Por favor, verifica los datos enviados y vuelve a intentarlo.',
    401: 'No tienes autorización para acceder a este recurso. Por favor, inicia sesión y vuelve a intentarlo.',
    403: 'No tienes permiso para realizar esta acción. Si crees que esto es un error, contacta al administrador.',
    404: 'No pudimos encontrar el recurso que estabas buscando. Es posible que haya sido movido o eliminado.',
    500: 'Ocurrió un error en nuestro servidor. Estamos trabajando para solucionarlo lo antes posible. Por favor, intenta nuevamente más tarde.',
  };
  return (
    errorMessages[status] ||
    'Ocurrió un error inesperado. Por favor, intenta nuevamente más tarde.'
  );
}

export async function isValidImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {method: 'HEAD'});
    if (!response.ok) return false;

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image/')) return false;

    return true;
  } catch (error) {
    console.error('Error validating image URL:', error);
    return false;
  }
}
