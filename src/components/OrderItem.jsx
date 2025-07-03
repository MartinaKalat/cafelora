import React from "react";
import "./orderitem.css"

const OrderItem = ({name, image}) => {
    return (
        <div className="order-item">
            <div className="order-item__image">
                <img src={`http://localhost:4000${image}`} alt={name}/>
            </div>
            <div className="order-item__name">{name}</div>
        </div>
    )
}

export default OrderItem;