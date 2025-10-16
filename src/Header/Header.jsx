import Nav from "../Nav/Nav";
import "./Header.css";

export default function Header(){
    return(
        <header  >
            <div className="div">
            <img className="img" src="/fotos/perfume.png" alt=""></img>
            <h1>Fragancias de Mujer</h1>
            </div>
            <Nav/>
        </header>
    )
}