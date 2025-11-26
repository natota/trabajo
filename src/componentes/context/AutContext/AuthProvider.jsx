import { useState } from "react"
import { AuthContext } from "./AutContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("session")
        if (saved) {
            return JSON.parse(saved);
        }
        return null;
    });
    const login = (nombre, contrasena) => {
        if (nombre === "admin" && contrasena === "1234") {
            const session = { nombre };//el objeto session tiene como atributo nombre que va a ser admin
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));//para guardarlo en sessionstrorage tiene que ser json
            return true;
        }
        return false;
    };
    const logout = () => {
        sessionStorage.removeItem("session");
        setUser(null);
        alert("cerrando sesión");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>);
}