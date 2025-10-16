import { useEffect,useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer=()=>{
const {id} =useParams();    //desestructuramos useParams, la clave coincide con el nombre que le dimos en Route-->id
const [detail, setDetail]=useState({});

useEffect(()=>{
    fetch("/data/productos.json")
    .then((res)=>{
            if(!res.ok){
                throw new Error("hubo un problema en buscar el producto");
             }
            return res.json();
        })
    .then((data)=>{
 //tenemos que encontrar el objeto que elegimos
        const found=data.find((p)=>p.id === id);//p parámetro iterador, comparamos el id del producto(p) del json con el
        //  id de param que vino de la url . find busca un objeto con det parametro. Devuelve 
// el elemento o "undefined". el elemento vacío también es true
        if(found){
            setDetail(found);
        }else{
            throw new Error("producto no encontrado");
        } })
    .catch((err)=>{ console.log(err);
    });
},[id]);
     
    return(
    <main>
        <h2>Detalle del producto seleccionado</h2>
       {Object.keys(detail).length ? (<ItemDetail detail={detail}/>):(<p>cargando...</p>)}
       {/* ( detail(props)={detail}(estado) ) */}
    {/* se usa el object porque useState[] es true, aunque esté vacío, entonces me fijo si tiene keys */}   
    </main>
    );
};