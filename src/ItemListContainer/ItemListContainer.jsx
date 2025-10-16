
import { useEffect,useState } from "react";
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer=()=>{
const[productos,setProductos]=useState([]);
useEffect(()=>{
    fetch("/data/productos.json")
    .then((res)=>{
        if(!res.ok){
            throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
    })
    .then((data)=>{
        setProductos(data);
    })
    .catch((err)=>{console.log(err)});
},[]);
 return(
    <section>
        <h2>Catálogo de productos</h2>
        <ItemList lista={productos}/>
    </section>
);
}
