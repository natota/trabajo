import "./Carrito.css";
import { useCartContext } from "../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const Carrito = () => {
    const { carrito, limpiarCarrito, borrarItem,  total, checkout } = useCartContext();

    return (
    <section className="carrito">
        <h2>Carrito de Compras</h2>
        {carrito.length ?
            (carrito.map((prod) => (
                <Item className="item"{...prod}key={prod.id}>
                    <div className="agregado">
                   <span>Cantidad:  {prod.cantidad}</span> 
                    <button className="boton" onClick={() => borrarItem(prod.id)}>Eliminar</button>
                    </div>
                </Item> )))
                : (
                <p>Tu carrito está vacío</p> )}
        {carrito.length? (
        <div>
            <div>
                <p className="total">Total a pagar:  $ {total()}</p>
            </div>
            <button className="btn1"onClick={checkout}>Finalizar Compra</button>
            <button className="btn1"onClick={limpiarCarrito}>Vaciar Carrito</button>
        </div>): (
            <Link to="/">Volver al inicio</Link> )}
    </section>
    )};