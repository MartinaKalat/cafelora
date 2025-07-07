import React from "react";
import "./menu.css"
import Drink from "../components/drinks/Drink.jsx";

const Menu = ({drinks}) => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
<div className="drinks-list">
    {drinks?.map?.(drink => (
        <Drink
        key={drink.id}
        name={`drink--${drink.id}`}
        title={drink.name}
        ordered={drink.ordered}
        layers={drink.layers}
        image={`http://localhost:4000${drink.image}`}
        id={drink.id}
        />
    ))}
</div>

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}

export default Menu;

