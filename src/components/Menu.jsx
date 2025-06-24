import React from "react";
import "./menu.css"
import Drink from "../components/drinks/Drink.jsx";

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>

                <Drink name="Espresso" title="Espresso"/>
                <Drink name="Cappuccino" title="Cappuccino"/>
                <Drink name="Latte" title="Latte"/>

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}

export default Menu;

