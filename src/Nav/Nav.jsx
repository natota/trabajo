import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../context/CartContext/useCartContext";

export default function Nav() {
    const { getTotalItems } = useCartContext();
    return (
        <nav >
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/categoria/oriental"}>Oriental</Link></li>
                <li><Link to={"/categoria/ambar"}>Ambar</Link></li>
                <li><Link to={"/carrito"}>Carrito</Link>
                    {(getTotalItems() > 0) && (<span className="cart-count">{getTotalItems()}</span>)}
                </li>

            </ul>
        </nav>
    );
}