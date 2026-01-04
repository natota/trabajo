export const validarProductos = (producto, isEdit ) => {
    const errores = {};
    if (!producto.nombre.trim()) {
        errores.nombre = "el nombre es obligatorio";
    }
    if (!producto.precio || producto.precio <= 0) {
        errores.precio = "el precio debe ser mayor a cero";
    }
    if (!producto.descripcion.trim()) {
        errores.descripcion = "la descripción es obligatoria";
    }
    if (!producto.categoria.trim()) {
        errores.categoria = "debe ingresar la categoría del producto";
    }
    if (!isEdit && !producto.file) {
        errores.file = "debe ingresar una imagen";
    }
    if (!producto.detalle.trim()){
        errores.detalle="tiene que poner un breve detalle del producto"
    }
    return errores;
}

