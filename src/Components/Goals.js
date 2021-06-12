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
                <h2>Lorem Ipsum</h2>
                <p>Evolução na carreira e desempenho máximo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum semper massa quis volutpat.</p>
                </div>
            </div>
        </section>
    )
}

export default Goals
