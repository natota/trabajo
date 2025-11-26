import "../ProductFormUI/ProductFormUI.css";

export const ProductFormUI = ({
    producto, errores, loading, onChange, onFileChange, onSubmit }) => {
    return (  <section className="section">
            <form className="formulario" onSubmit={onSubmit}> 
                <h2>Agregar Producto</h2>
                <div  className="div">
                    <label>Nombre:</label>
                    <input className="input" type="text" name="nombre" value={producto.nombre} onChange={onChange}/>
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                </div>
                <div className="div">
                     <label >Precio:</label>
                    <input className="input" type="number" name="precio" value={producto.precio} onChange={onChange}/>
                     {errores.precio && <p className="error">{errores.precio}</p>}
                </div>
                <div className="div">
                     <label >Categoría:</label>
                    <input className="input" type="text" name="categoria" value={producto.categoria} onChange={onChange}  />
                     {errores.categoria && <p className="error">{errores.categoria}</p>}
                </div>
                <div className="div"> 
                     <label >Descripción:</label>
                    <input className="input" type="text" name="descripcion" value={producto.descripcion} onChange={onChange}  ></input>
                     {errores.descripcion && <p className="error">{errores.descripcion}</p>}
                </div>
                <div className="div"> 
                    <label >Detalle:</label>
                    <textarea className="input" name="detalle" value={producto.detalle} onChange={onChange}  ></textarea>
                     {errores.detalle && <p className="error">{errores.detalle}</p>}
                </div>
                <div className="img"> <label >Imagen:</label>
                    <input className="foto" type="file" accept="image/*" onChange={(e) => 
                         onFileChange(e.target.files?.[0] ?? null)} />
                    {/*le decimos que queremos que busque una imagen, para decirle que foto tiene que usar, como subo de a una el índice va a ser cero */}
                    {errores.file && <p className="error">{errores.file}</p>}
                </div>
                <button className="btn" type="submit" disabled={loading}>{loading ? "Guardando...":"Guardar"}</button>
            </form> 
            </section>
        );              
};
