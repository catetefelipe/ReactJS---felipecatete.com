import React from "react";
import "../Styles/Skills.css";



function Skills() {
    return (
        <section className="skills">
            <h2>Habilidades</h2>
            <div className="grid_container">
                <div className="grid_item i_1">
                    <h3>Inglês Fluente</h3>
                    <p>Com certeza esse um dos motivos que me fazem aprender mais rápido, ter um código mais coeso e faça conexões com devs de outros países</p>
                </div>
                <div className="grid_item i_2">
                    <h3>Resolvedor de Problemas</h3>
                    <p>Assim como gosto de aprender a aprender, eu também gosto de aprender a resolver, assim ganho agilidade na hora de resolver bugs</p>
                </div>
                <div className="grid_item i_3">
                    <h3>Design Responsivo</h3>
                    <p>indiscutivelmente a principal habilidade que um desenvolvedor front-end deve ter hoje em dia</p>
                </div>  
                <div className="grid_item i_4">
                    <h3>UI/UX</h3>
                    <p>Aplicação do layout solicitado com foco nos mínimos detalhes solicitados pelo time de design</p>
                </div>
                <div className="grid_item i_5">
                    <h3>Adaptabilidade</h3>
                    <p>Gosto do desafio de me adaptar a novas tecnologias, ferramentas, pessoas e um novo ambiente de trabalho</p>
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
