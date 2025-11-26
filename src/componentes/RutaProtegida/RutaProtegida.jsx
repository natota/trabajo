import { Navigate } from "react-router-dom";
import { UseAuthContext } from "../context/AutContext/UseAuthContext";

export const RutaProtegida=({children})=>{
    const {user}=UseAuthContext();

    if (!user){
        return <Navigate to="/" replace />;
    }
    return children;
}
//si no existe el usuario nos envía directamente a la home
//hay que poner {children} porque envuelve cosas 