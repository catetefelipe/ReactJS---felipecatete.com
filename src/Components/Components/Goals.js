import React from "react";
import "../Styles/Goals.css";
import steps from "../Images/Goals/steps.png";



function Goals() {
    return (
        <section className="goals">
            <div className="goals_main_div">
                <div className="goals_img_div">
                    <img src={steps} alt="" />
                </div>

                <div className="goals_text_div">
                <h2>Objetivos</h2>
                <p>Quero ajudar a minha equipe com a minha energia e com o máximo do meu conhecimento, buscando solucionar problemas, ajudando o próximo e consequentemente evoluindo como programador.</p>
                </div>
            </div>
        </section>
    )
}

export default Goals
