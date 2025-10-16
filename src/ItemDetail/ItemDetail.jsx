import { useCartContext } from "../context/CartContext/useCartContext";
import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({detail}) => {
const {addItem}=useCartContext();
    return (
        <div className="itemDetail">
            <div>
                <h3 className="detail">{detail.nombre}</h3>
                <img clasName="img1" src={detail.foto}></img>
                <p>$ {detail.precio}</p>
                <p>{detail.descripcion}</p>
            </div>
            <div className="nro2">
                <p className="p">"{detail.detalle}"</p>
                <button className="boton" onClick={()=>addItem(detail)}>Agregar al carrito</button>
            </div>
        </div>
        
    );
}