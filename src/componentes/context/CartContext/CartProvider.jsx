import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const existe = (id) => {
        const exist = carrito.some((p) => p.id === id);
        //usamos some y no find porque find me trae el producto, yo quiero saber si existe, además find, 
        //al traerme el objeto, muta
        return exist;
    };
    const addItem = (item) => {
        if (existe(item.id)) {
            //map, cuido mutación a nivel del array
            const masCarrito = carrito.map((prod) => {
                if (prod.id === item.id) {//cuido mutación a nivel objeto con el spread creo copia
                    return { ...prod, cantidad: prod.cantidad + item.cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(masCarrito);
            alert("Agregado al carrito");
        } else {
            setCarrito([...carrito, item]);
            alert(`${item.nombre} agregado`);
        }
    };
    const borrarItem = (id) => {
        const filtrarItem = carrito.filter((p) => p.id !== id);
        setCarrito(filtrarItem);
        alert("producto eliminado");
    };
    const limpiarCarrito = () => {
        setCarrito([])
    };
    const getTotalItems = () => {
        const totalItems = carrito.reduce((acc, p) => acc + p.cantidad, 0);
        return totalItems;
    };
    const total = () => {
        const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
        return Math.round(total * 100 / 100);
    }
    const checkout=()=>{
        const ok=confirm("¿Seguro que quiere finalizar su compora?");
        if (ok){
            alert("Compra realizada con éxito");
            limpiarCarrito();
        }
    }
    const values = { carrito, addItem, limpiarCarrito, borrarItem, total, getTotalItems, checkout };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}