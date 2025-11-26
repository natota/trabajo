
import { useEffect,useState } from "react";
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getProductos } from "../../servicios/Productos";

export const ItemListContainer=()=>{
const [productos,setProductos] = useState([]);//desestructuramos useState
const { categoria } = useParams();
useEffect(()=>{
    getProductos(categoria)
    .then((data)=> setProductos(data))
    .catch((err)=> console.log(err));
}, [categoria]);
 return(
    <section>
        <h2>Catálogo de productos</h2>
        <ItemList lista={productos}/>
    </section>
);}
