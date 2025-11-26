
import { useState } from "react";

import "../ProductFormContainer/ProductFormContainer.css";
import { uploadToImgbb } from "../../../servicios/uploadImage";
import { crearProducto } from "../../../servicios/Productos";
import { validarProductos } from "../../../Utiles/ValidarProductos";
import { ProductFormUI } from "../ProductFormUI/ProductFormUi";

export const ProductFormContainer = () => {
    const [ loading, setLoading ] = useState();
    const [ errores, setErrores ] = useState("");
    const [ file, setFile ] = useState(null);
    const [ producto, setProducto ] = useState({
        nombre: "", precio: "", categoria: "", descripcion: "", detalle:"",
    });

    const handleChange = (e) => {
        const { name,value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrores({});
        setLoading(true);
    
        const nuevoError = validarProductos({ ...producto, file });//verifica que no cargue con errores
        if (Object.keys(nuevoError).length > 0) {
            setErrores(nuevoError);
            setLoading(false);
            return;
        }
        try {
            const foto= await uploadToImgbb(file);
            const datoProducto={
                ...producto, precio: Number(producto.precio), foto,//pongo foto porque es el atributo del obj
            };
            await crearProducto(datoProducto);//no puedo subir el estado porque no tengo la imagen, por eso uso datoProducto que la tiene
            alert("Producto cargado con éxito");
            setProducto({ nombre: "", precio: "", categoria: "", descripcion: "", detalle:"" });
            setFile(null);//queda la última imagen, no importa
        } catch (error) {
            setErrores({ general: error.message });// errores que no contemplé antes
        } finally {
            setLoading(false);
        }
    };
      return (
      <ProductFormUI producto={producto} errores={errores} onChange={handleChange}
        onFileChange={setFile} loading={loading} onSubmit={handleSubmit} />
    );
}