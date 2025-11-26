import { useState } from "react";
import "./Count.css";


export const Count = ({ btnText, onConfirm }) => {   
     //onConfirm es una función pero no lleva paréntesis porque la estoy invocando como props
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };
    const confirm = () => {
        if (count > 0) {
            onConfirm(count);
        } };
    return (
    <div className="count-container">
        <div className="count-button">
            <button className="boton" onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="boton" onClick={increment}>+</button>
        </div>
        <button className="boton btn-add" onClick={confirm} disabled={count === 0}>{btnText}</button>
    </div>);
};
