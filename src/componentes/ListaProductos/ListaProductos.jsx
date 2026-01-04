import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../servicios/Productos";
import "./ListaProductos.css";

const BASE_URL = "https://6900bc75ff8d792314bb3a31.mockapi.io/react/productos";

export const ListaProductos = ({producto, editarProducto}) => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();
    useEffect(() => {
        getProductos(categoria)
            .then((data) => setProductos(data))
            .catch((err) => console.log(err));
    }, [categoria]);
    return (
        <div className="crud">
            < div className="list-div">
                <h2>Lista de Productos</h2>
                <table className="list-section">
                    <thead>
                        <tr>
                            <th className="borde">Producto</th>
                            <th className="borde">Categoría</th>
                            <th className="borde">Descripción</th>
                            <th className="borde">Detalle</th>
                            <th className="borde">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr className="lista" key={producto.id}>
                                <td className="borde"><strong>{producto.nombre}</strong>: ${producto.precio}</td>
                                <td className="borde">Categoría: {producto.categoria}</td>
                                <td className="borde">{producto.descripcion}</td>
                                <td className="borde">{producto.detalle}</td>
                                <td className="borde">
                                    <button className="btn-editar" onClick={ () =>  editarProducto(producto) }>
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        )   )}  
                    </tbody>
                </table>
            </div>
        
        </div>
    );
}
//editarProducto es la función que viene del componente padre (Crud) y le paso el producto que quiero editar, para que el padre lo maneje y se lo pase al formulario