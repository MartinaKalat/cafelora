import React from "react";
import OrderItem from "./OrderItem.jsx";
import "./order.css";

const Order = ({ items }) => {
    return (
        <div className="order__content">
            <h2 className="order__title">Vaše objednávka</h2>
            {items.length === 0 ? (
                <p className="order__empty">Zatím nemáte nic objednáno.</p>
            ) : (
                <div className="order__items">
                    {items.map((item) => (
                        <OrderItem key={item.id} name={item.name} image={item.image} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Order;
