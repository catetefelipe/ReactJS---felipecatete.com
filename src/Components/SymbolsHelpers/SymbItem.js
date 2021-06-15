import React from "react";



function SymbItem({ image }) {
    return (
        <div className="symbItem">
            <div style={{ backgroundImage: `url(${image})`, width: "100%", height: "100%" }}></div>
        </div>
    )
}

export default SymbItem
