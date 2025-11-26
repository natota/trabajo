import "./Item.css";
import { Link } from "react-router-dom";

export  const Item=({id,nombre,foto, precio, descripcion, children})=>{
return(
   /* <Link to={`/detalle/${id}`}>*/
    <article>
        <h3 className="item">{nombre}</h3>
        <img src={foto}></img>
        <p>$ {precio}</p>
        <p>{descripcion}</p>
        {/* <button className="botonR" ><Link to={`/detalle/${id}`}>Ver más</Link></button>*/ }
         {children}
    </article>
  /*  </Link>*/
);
}
//puedo envolver todo en un link porque yo quiero que toda la superficie de mi 
//tarjeta sea clickeable, sino puedo poner un botón
//como en ItemList yo pasé todos los datos del producto a Item -->(...prod)
//puedo obtener también el id que necesito para linkear el producto
//si yo quiero reusar el componente en ItemDetail no puedo poner el link acá porque
//después voy a tener un botón clickeable y se hace un bucle, muestro en un 
//ejercicio aparte como lo resuelvo