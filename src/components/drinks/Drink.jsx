
import React from "react";
import './drink.css';
import Layers from "../layers/Layers.jsx";

const Drink = ({ name, image, title, layers, ordered, id }) => {
    return (
        <div className="drink">
            <div className={`drink__item ${name}`}>
                <div className="drink__cup">
                    <img src= {image} alt= {title} />
                </div>
                <div className="drink__info">
                    <h3>{title}</h3>
                    {layers.map((layer, index) => (


                   <Layers key={index} label={layer.label} color={layer.color} />
                    ))}
                </div>
            </div>
            <form className="drink__controls" data-id={id} data-ordered={ordered}>
                <input type="hidden" className="order-id" value={id}/>
                <button
                    className={`order-btn ${ordered ? "order-btn--ordered" : ""}`}
                   type="submit"
                        >
                    {ordered ? "Zrusit" : "Objednat" }
                </button>
            </form>
        </div>
    );
};

export default Drink;