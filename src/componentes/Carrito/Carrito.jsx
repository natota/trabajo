import "./Carrito.css";
import { useCartContext } from "../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import { Count } from "../Count/Count";

export const Carrito = () => {
    const { carrito, limpiarCarrito, updateCantidad, total, checkout } = useCartContext();

    const handleUpdate = (id, cantidad) => { updateCantidad(id, cantidad) };

    return (
        <section className="carrito">
            <h2>Carrito de Compras</h2>
            {carrito.length ?
                (carrito.map((prod) => (
                    <Item className="item"{...prod} key={prod.id}>
                        <div className="agregado">
                            {/* <span>Cantidad:  {prod.cantidad}</span> 
                    <button className="boton" onClick={() => borrarItem(prod.id)}>Eliminar</button>*/}
                            <Count btnText={"Guardar"} inicial={prod.cantidad} onConfirm={(cantidad) =>
                                handleUpdate(prod.id, cantidad)} />
                        </div>
                    </Item>)))
                : ( <p style={{height:350}}>Tu carrito está vacío</p>)}
        
            {carrito.length ? (
                <div>
                    <div>
                        <p className="total">Total a pagar:  $ {total()}</p>
                    </div>
                    <div className="botones">
                    <button className="btn1" onClick={checkout}>Finalizar Compra</button>
                    <button className="btn1" onClick={limpiarCarrito}>Vaciar Carrito</button>
                    </div>
                </div>) : (
                <Link to="/">Volver al inicio</Link>)}
        </section>
    )
};