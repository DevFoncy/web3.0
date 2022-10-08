import { toast } from 'react-toastify';

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: 'top-left',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: 'top-left',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ALERT_MESSAGES = {
  add_item: 'Producto añadido',
  order_sent: 'Orden de compra enviado',
  location_set: 'Ubicación registrada',
};
