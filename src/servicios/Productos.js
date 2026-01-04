import { Ventana } from "../Utiles/ventana/Ventana";

const BASE_URL = "https://6900bc75ff8d792314bb3a31.mockapi.io/react/productos";

export const crearProducto = async (producto) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(producto),
    });
    if (!res.ok) {
        throw new Error(Ventana("error", "No se pudo crear el producto", "top-center"));  //("no se pudo crear el producto");
    }
    const result = await res.json();
    return result;
};

export const getProductos = async (categoria) => {
    let url = BASE_URL;
    if (categoria) {
        url = `${BASE_URL}?categoria=${categoria}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(Ventana("error", "Error al listar el producto", "top-center"));  //("Error al listar el producto");
    }
    const results = await res.json();
    return results;
};

export const getProductosById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error(Ventana("error", "Error al obtener el producto", "top-center"));  //("Error al obtener el producto");
    }
    return await res.json();
};

export const editarProducto = async (id, productoActualizado) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoActualizado),
    });
    if (!res.ok) {
        throw new Error(Ventana("error", "No se pudo editar el producto", "top-center"));  //("No se pudo editar el producto");
    }
    const result = await res.json();
    return result;
};

// eliminar productos
export const eliminarProducto = async (id) => {
   const confirmar = window.confirm( "¿estás seguro de eliminar?");
    if (confirmar) {
        try {
        const respuesta = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        if (!respuesta.ok) throw new Error("No se pudo eliminar");
        Ventana("success", "Producto eliminado correctamente", "top-center");
        //  alert("Producto eliminado correctamente");
    } catch (error) {
        toast.dismiss();
        console.error(error.message);
        Ventana("error", "Hubo un problema al eliminar el producto", "top-center");
        //  alert("Hubo un problema al eliminar el producto");
    };
    }

}