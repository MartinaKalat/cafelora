import React from "react";
import "./layers.css"

const Layers = ({color, label}) => {
    return (
        <div className="layer">
            <div className="layer__color" style={{ backgroundColor: color }}></div>
            <div className="layer__label">{label}</div>
        </div>
    )
}

export default Layers;