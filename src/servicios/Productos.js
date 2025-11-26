const BASE_URL = "https://6900bc75ff8d792314bb3a31.mockapi.io/react/productos";

export const crearProducto = async (producto) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(producto),
    });
    if (!res.ok) {
        throw new Error("no se pudo crear el producto");
    }
    const result = await res.json();
    return result;
};//para crear el producto, acá podría modificar 
// y eliminar pero no lo hacemos ahora

export const getProductos = async (categoria) => {
    let url = BASE_URL;
    if (categoria) {
        url = `${BASE_URL}?categoria=${categoria}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al listar el producto");
    }
    const results = await res.json();
    return results;
};
export const getProductosById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }
    return await res.json();
};
// eliminar productos
export const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿estás seguro de eliminar?");
    if (confirmar) {
        try {
            const respuesta = await fetch(`${BASE_URL}/${id}`, {
                method: "DELETE",
            });
            if (!respuesta.ok) throw new Error("No se pudo eliminar");
            alert("Producto eliminado correctamente");
        } catch (error) {
            console.error(error.message);
            alert("Hubo un problema al eliminar el producto");
        }
    }
}
