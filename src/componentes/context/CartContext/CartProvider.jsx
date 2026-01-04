import { useState } from "react"
import { CartContext } from "./CartContext"
import { Ventana } from "../../../Utiles/ventana/Ventana";

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
Ventana("info", "Cantidad actualizada en el carrito", "top-center");
           // alert("Agregado al carrito");
        } else {
            setCarrito([...carrito, item]);
            Ventana("success", `${item.nombre} agregado al carrito`, "top-center");
        //    alert(`${item.nombre} agregado`);
        }
    };
    const updateCantidad=(id, cantidad)=>{
        if (cantidad===0){
            borrarItem(id);
            return
        }
        setCarrito(carrito.map(p=>p.id===id?{...p,cantidad}:p));
    }
    const borrarItem = (id) => {
        const filtrarItem = carrito.filter((p) => p.id !== id);
        setCarrito(filtrarItem);
        Ventana("warning", "Producto eliminado del carrito", "top-center");
      //  alert("producto eliminado");
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
            Ventana("success", "Compra realizada con éxito", "top-center");
         //   alert("Compra realizada con éxito");
            limpiarCarrito();
        }
    }
    const values = { carrito, addItem, updateCantidad, limpiarCarrito, borrarItem, total, getTotalItems, checkout };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}