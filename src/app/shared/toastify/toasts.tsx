import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// https://fkhadra.github.io/react-toastify/introduction/
export function toastGoodNews(message: string, duration?: number) {
    return toast.success(message, {
        position: "bottom-right",
        autoClose: duration || 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function toastWarning(message: string, duration?: number) {
    return toast.warning(message, {
        position: "bottom-right",
        autoClose: duration || 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

}

export function toastBadNews(message: string, duration?: number, idPreventDuplication?: string) {
    return toast.error(message, {
        position: "bottom-right",
        autoClose: duration || 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: idPreventDuplication,
    });

}