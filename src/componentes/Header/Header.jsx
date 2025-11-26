import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Header.css";

export default function Header() {
    return (
        <header  >
            <div className="div">
                <Link to="/"> <img className="img" src="/fotos/perfume.png" alt="logo de la empresa"></img></Link>
                <h1>Fragancias de Mujer</h1>
            </div>
            <Nav />
        </header>
    )
}