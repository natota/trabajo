import { useState } from "react"
import { UseAuthContext } from "../context/AutContext/UseAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Ventana } from "../../Utiles/ventana/Ventana";

export const Login = () => {
    const [usuario, setUsuario] = useState({ nombre: "", contrasena: "" });
    const { user, login } = UseAuthContext();
    const navigate = useNavigate();
    if (user) {
        return <Navigate to="/admin/alta-productos" replace />;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(usuario.nombre, usuario.contrasena);
        if (success) {
            navigate(`/admin/alta-productos`);//si estoy logueada paso directamente al alta sin loguin
        } else {
            Ventana("error", "Credenciales incorrectas", "top-center");
            //alert("credenciales incorrectas");
            setUsuario({ nombre: "", contrasena: "" });
        }};
    return (
        <section className="login-section">
            <form className="login-formulario" onSubmit={handleSubmit}>
                <h2> Iniciar sesion</h2>
                <div className="login-div">
                    <label >Usuario: </label>
                    <input className="login-input" type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
                </div>
                <div className="login-div">
                    <label htmlFor="">Contraseña:</label>
                    <input className="login-input" type="password" name="contrasena" value={usuario.contrasena} onChange={handleChange} />
                </div>
                <button className="login-btn" type="submit">Iniciar Sesión</button>
            </form>
        </section>
    )
}