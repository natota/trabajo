import { Link } from "react-router-dom";
import { Item } from "../Item/Item"
import "./ItemList.css";

export const ItemList=({lista})=>{
return(
    <>
    <div className="tarjetas">
    {lista.length?(
        lista.map((prod)=>
            <Link to={`/detalle/${prod.id}`}key={prod.id} >
        <Item {...prod}/>
        </Link>
)
    ):(<p>no hay productos</p>)}
    </div>
    </>
);
}
//la key la necesita react para diferenciar los productos, no es lo mismo
//que el id que usamos en param (el props del componente), a pesar de que se usa para lo mismo
//en el spread operator ...prod también estoy pasando el id a Item 
//si no ubiera usado el spread hubiera tenido que poner prod.id de nuevo