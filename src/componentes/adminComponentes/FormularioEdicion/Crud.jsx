import { useState } from "react";
import { ListaProductos } from "../../ListaProductos/ListaProductos";
import { ProductFormContainer } from "../ProductFormContainer/ProductFormContainer";
import "./Crud.css";

export const Crud=() => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const editarProducto = (producto) => {//función que recibe el producto a editar desde el componente hijo (ListaProductos)
        setProductoSeleccionado(producto);//setea el estado con el producto que quiero editar al formulario
    };
    return (
        <div className="CRUD">
            <ListaProductos producto={productoSeleccionado} editarProducto={editarProducto} />
            <ProductFormContainer productoSeleccionado={productoSeleccionado} onCerrar={()=>setProductoSeleccionado(null)}/>
        </div>
    );
}