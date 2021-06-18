import React from "react";
import "../Styles/AboutMe.css";
import pic from "../Images/AboutMe/profile_pic.png";



function AboutMe() {
    return (
        <section className="aboutme">
            <h2>Sobre Mim</h2>
            <div className="aboutme_main_div">
                <div className="aboutme_img_div">
                    <img src={pic} alt="Felipe Catete" />
                </div>
                <p>Estou em busca da evolução na minha carreira como programador, por isso procuro por uma empresa com profissionais motivados que em troca receberão toda a minha dedicação e ajuda.</p>
            </div>
        </section>
    )
}

export default AboutMe