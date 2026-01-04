
import { useEffect, useState } from "react";
import "../ProductFormContainer/ProductFormContainer.css";
import { uploadToImgbb } from "../../../servicios/uploadImage";
import { crearProducto, editarProducto, eliminarProducto } from "../../../servicios/Productos";
import { validarProductos } from "../../../Utiles/ValidarProductos";
import { ProductFormUI } from "../ProductFormUI/ProductFormUi";
import { Ventana } from "../../../Utiles/ventana/Ventana";

export const ProductFormContainer = ({ productoSeleccionado, onCerrar }) => {
    const [loading, setLoading] = useState();
    const [errores, setErrores] = useState("");
    const [file, setFile] = useState(null);
    const [producto, setProducto] = useState({
        nombre: "", precio: "", categoria: "", descripcion: "", detalle: "",
    });
    useEffect(() => {           //hace que se carguen los datos en el formulario cuando quiero editar
        if (productoSeleccionado) {
            setProducto({ ...productoSeleccionado });
        }
    }, [productoSeleccionado]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrores({});
        setLoading(true);
        const nuevoError = validarProductos({ ...producto, file }, !!productoSeleccionado);
        //verifica que no cargue con errores
        if (Object.keys(nuevoError).length > 0) {
            setErrores(nuevoError);
            setLoading(false);
            return;
        }
        try {
            let foto = productoSeleccionado?.foto || null;//para que no tire error si estoy editando y no cambio la foto
            if (file) {
                foto = await uploadToImgbb(file);
            }
            const datoProducto = {
                ...producto, precio: Number(producto.precio), foto,//pongo foto porque es la variable que tiene la url de la imagen
            };
            if (productoSeleccionado) {
                await editarProducto(productoSeleccionado.id, datoProducto);
            Ventana("success", "Producto editado con éxito", "top-center");
               // alert("Producto editado con éxito");
            } else {
                await crearProducto(datoProducto);//no puedo subir el estado porque no tengo la imagen, por eso uso datoProducto que la tiene
            Ventana("success", "Producto cargado con éxito", "top-center");
               // alert("Producto cargado con éxito");
            }
            setProducto({ nombre: "", precio: "", categoria: "", descripcion: "", detalle: "" });
            setFile(null);//queda la última imagen, no importa
        } catch (error) {
            setErrores({ general: error.message });// errores que no contemplé antes
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!productoSeleccionado) return;
        await eliminarProducto(productoSeleccionado.id);
        setProducto({
            nombre: "", precio: "", categoria: "", descripcion: "", detalle: "",
        });
        onCerrar();
    };

    return (<ProductFormUI producto={producto} errores={errores} onChange={handleChange}
        onFileChange={setFile} loading={loading} onSubmit={handleSubmit} onDelete={handleDelete} isEdit={!!productoSeleccionado} />
    );
}



