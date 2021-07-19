import React from "react";

// lista com as imagens
import { SymbList } from "./SymbolsHelpers/SymbList";
// importa o array e configura as medidas das imagens
import SymbItem from "./SymbolsHelpers/SymbItem";



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
