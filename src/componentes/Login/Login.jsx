import { useState } from "react"
import { UseAuthContext } from "../context/AutContext/UseAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../adminComponentes/ProductFormUI/ProductFormUI.css";

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
            navigate(`/admin/alta-productos`);
        } else {
            alert("credenciales incorrectas");
            setUsuario({ nombre: "", contrasena: "" });
        }}
    return (
        <section className="section">
            <form className="formulario" onSubmit={handleSubmit}>
                <h2> Iniciar sesion</h2>
                <div className="div">
                    <label >Usuario: </label>
                    <input className="input" type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
                </div>
                <div className="div">
                    <label htmlFor="">Contraseña:</label>
                    <input className="input" type="password" name="contrasena" value={usuario.contrasena} onChange={handleChange} />
                </div>
                <button className="btn" type="submit">Iniciar Sesión</button>
            </form>
        </section>
    )
}