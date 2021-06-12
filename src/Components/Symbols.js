import React from "react";
import "../Styles/Symbols.css";
import { SymbList } from "./SymbList";
import SymbItem from "./SymbItem";




function Symbols() {
    return (
        <section className="symbols">
            <div className="symb_main_div">
                <div className="symbList">
                    {SymbList.map((symbItem, key) => {
                        return (
                            <SymbItem
                                key={key}
                                image={symbItem.image}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Symbols
