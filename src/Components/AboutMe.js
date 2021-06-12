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
                <p>Posso dizer que eu sou bastante focado e esforçado, sempre em busca da evolução, alcance de todas as metas e resolução dos problemas. Procuro sempre tratar meus colegas de trabalho com muito respeito, ouvindo, auxiliando e incentivando o meu time.</p>
            </div>
        </section>
    )
}

export default AboutMe