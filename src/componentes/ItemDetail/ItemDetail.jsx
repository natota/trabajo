import { useCartContext } from "../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import "./ItemDetail.css"

export const ItemDetail = ({detalle}) => {
const {addItem}=useCartContext();

const handleAdd=(cantidad)=>{
    addItem({...detalle, cantidad});
}

    return (
     <div className="itemDetail">
            <div>
                <h3 className="detail">{detalle.nombre}</h3>
                <img  src={detalle.foto}></img>
                <p>$ {detalle.precio}</p>
                <p>{detalle.descripcion}</p>
            </div>
            <div className="nro2">
                 <p className="p">"{detalle.detalle}"</p> 
                <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>
            </div>
        </div>
        
    );
}