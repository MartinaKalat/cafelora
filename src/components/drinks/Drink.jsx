
import React from "react";
import './drink.css';

const Drink = ({ name, image, title }) => {
    return (
        <div className="drink">
            <div className={`drink__item ${name}`}>
                <div className="drink__cup">
                    <img src={image} alt={title} />
                </div>
                <div className="drink__info">
                    <h3>{title}</h3>
                    <div className="layer">
                        <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
                        <div className="layer__label">espresso</div>
                    </div>
                </div>
            </div>
            <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">
                    Objednat
                </button>
            </form>
        </div>
    );
};

export default Drink;