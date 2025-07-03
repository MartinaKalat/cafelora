import React from "react";
import OrderItem from "./OrderItem.jsx";
import "./order.css"

const Order = ({ items }) => {
    return (
        <div className="order__content">
            {items.length > 0 ? (
                <div className="order__items">
                    {items.map((item) => (
                        <OrderItem key={item.id} name={item.name} image={item.image} />
                    ))}
                </div>
            ) : (
                <p>Objednávka je prázdná.</p>
            )}
        </div>
    );
};

export default Order;