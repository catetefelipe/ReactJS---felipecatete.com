import React from "react";
import "../Styles/Skills.css";



function Skills() {
    return (
        <section className="skills">
            <h2>Habilidades</h2>
            <div className="grid_container">
                <div className="grid_item i_1">
                    <h3>Inglês Fluente</h3>
                    <p>O motivo que me faz aprender mais rápido, ter um código mais coeso, e me permite fazer conexões com devs de outros países</p>
                </div>
                <div className="grid_item i_2">
                    <h3>Base Fundamental</h3>
                    <p>Durante meu aprendizado foquei muito na construção de uma boa base dos fundamentos, para entender o conceito e os porquês</p>
                </div>
                <div className="grid_item i_3">
                    <h3>Ferramentas</h3>
                    <p>HTML, CSS, JavaScript, React, GitHub, Vercel, WordPress, Figma, etc</p>
                </div>  
                <div className="grid_item i_4">
                    <h3>UI/UX</h3>
                    <p>Aplicação do layout solicitado com foco nos mínimos detalhes solicitados pelo time de design</p>
                </div>
                <div className="grid_item i_5">
                    <h3>Adaptabilidade</h3>
                    <p>Gosto do desafio de me adaptar a novas tecnologias, ferramentas, equipes, e pessoas com diferentes personalidades</p>
                </div>  
                <div className="grid_item i_6">
                    <h3>SEO</h3>
                    <p>Além do SEO técnico, entendo muito bem sobre content SEO, o que facilita bastante a minha conexão com profissionais de marketing</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
