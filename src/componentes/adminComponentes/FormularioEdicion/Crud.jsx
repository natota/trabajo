import { useEffect, useState } from "react";
import { ListaProductos } from "../../ListaProductos/ListaProductos";
import { ProductFormContainer } from "../ProductFormContainer/ProductFormContainer";
import "./Crud.css";

export const Crud=() => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
const[productos, setProductos]=useState([]);
const [loading, setLoading]=useState(false);

const cargarProductos = async () => {
    setLoading(true);
    const data = await getProductos();
    setProductos(data);
    setLoading(false);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

    const editarProducto = (producto) => {//función que recibe el producto a editar desde el componente hijo (ListaProductos)
        setProductoSeleccionado(producto);//setea el estado con el producto que quiero editar al formulario
    };
    return (
        <div className="CRUD">
            <ListaProductos producto={productoSeleccionado} editarProducto={editarProducto} loading={loading} />
            <ProductFormContainer productoSeleccionado={productoSeleccionado} onCerrar={()=>{setProductoSeleccionado(null); cargarProductos();}}/>
        </div>
    );
}