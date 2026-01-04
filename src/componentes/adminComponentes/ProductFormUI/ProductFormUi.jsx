
import "../ProductFormUI/ProductFormUI.css";

export const ProductFormUI = ({
     producto, errores, isEdit, onChange, onFileChange, onDelete, onSubmit }) => {

     return (
          <section className="form-section">
               <form className="formulario" onSubmit={onSubmit}>
                    <h2>{isEdit ? "Modificar/Eliminar Producto" : "Agregar Producto"}</h2>
                    <div className="div">
                         <div className="div2">
                              <label>Nombre:</label>
                              <input className="input" type="text" name="nombre" value={producto.nombre} onChange={onChange} />
                         </div>
                         <span>{errores.nombre && <p className="error">{errores.nombre}</p>}</span>
                    </div>

                    <div className="div">
                         <div className="div2">
                              <label >Precio:</label>
                              <input className="input" type="number" name="precio" value={producto.precio} onChange={onChange} />
                         </div>
                         <span> {errores.precio && <p className="error">{errores.precio}</p>}</span>
                    </div>
                    <div className="div">
                         <div className="div2">
                              <label >Categoría:</label>
                              <input className="input" type="text" name="categoria" value={producto.categoria} onChange={onChange} />
                         </div>
                         <span> {errores.categoria && <p className="error">{errores.categoria}</p>}</span>
                    </div>
                    <div className="div">
                         <div className="div2">
                              <label >Descripción:</label>
                              <input className="input" type="text" name="descripcion" value={producto.descripcion} onChange={onChange}  ></input>
                         </div>
                         <span> {errores.descripcion && <p className="error">{errores.descripcion}</p>}</span>
                    </div>
                    <div className="div">
                         <div className="div2">
                              <label >Detalle:</label>
                              <textarea className="input" name="detalle" value={producto.detalle} onChange={onChange}  ></textarea>
                         </div>
                         <span> {errores.detalle && <p className="error">{errores.detalle}</p>}</span>
                    </div>
                    <div className="div">
                         <div className="">
                              <label >Imagen:</label>
                              <input className="foto" type="file" accept="image/*" onChange={(e) =>
                                   onFileChange(e.target.files?.[0] ?? null)} />
                              {/*le decimos que queremos que busque una imagen, para decirle que foto tiene que usar, como subo de a una el índice va a ser cero */}
                         </div>
                         <span> {errores.file && <p className="error">{errores.file}</p>}</span>
                    </div>
                    <button className="btn" type="submit" >{isEdit ? "Guardar Cambios" : "Agregar Producto"}</button>
                    {isEdit && (<button type="button" className="btn-eliminar" onClick={onDelete}>Eliminar Producto</button>
                    )}
               </form>
          </section >
     );
};
