import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Ventana = (tipo, mensaje, posicion = "top-right", tema="dark", closeOnClick = true) => {
    const toastTipo = {
        success: toast.success,
        error: toast.error,
        info: toast.info,
        warning: toast.warning,
        default: toast,
    };
    const toastFunction = toastTipo[tipo] || toastTipo.default;
    toastFunction(mensaje, { position: posicion, theme: tema, closeOnClick: closeOnClick },);
}