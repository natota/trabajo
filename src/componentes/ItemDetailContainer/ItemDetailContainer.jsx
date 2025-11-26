import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductosById } from "../../servicios/Productos";

export const ItemDetailContainer = () => {
    const { id } = useParams();    //desestructuramos useParams, la clave coincide con el nombre que le dimos en Route-->id
    const [detalle, setDetail] = useState({});

    useEffect(() => {
         getProductosById(id)
            .then((data) => { setDetail(data) })
            .catch((err) => { console.log(err);
            });
    }, [id]);//depende del id para cambiar el detalle del producto

    return (
        <main>
            <h2>Detalle del producto seleccionado</h2>
            {Object.keys(detalle).length ? (<ItemDetail detalle={detalle} />) :
             (<p>cargando...</p>)}
            {/* ( detail(props)={detail}(estado) ) */}
            {/* se usa el object porque useState[] es true, aunque esté vacío, entonces me fijo si tiene keys */}
        </main>
    );
};