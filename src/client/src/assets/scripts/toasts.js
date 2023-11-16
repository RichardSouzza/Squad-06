import { toast } from 'react-toastify';

export function notify(text) {
    toast.info(text, {
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });
}

export function error(text) {
    toast.error(text, {
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: false,
    });
}

export function limitError(text) {
    toast.warning(text, {
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });
}