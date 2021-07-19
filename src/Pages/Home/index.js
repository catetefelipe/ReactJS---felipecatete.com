import React from "react";
import "./styles.css";

// COMPONENTES
//botão do "Entre em contato"
import Popup from "../../Components/Popup/index";
// barra azul com símbolos das linguagens
import Symbols from "./LanguageSymbols/index";

// IMAGENS
// minha foto no computador
import aboutme from "../../Images/Home/aboutme.png";
// a foto da minha cara na section onde eu falo sobre mim
import pic from "../../Images/AboutMe/profile_pic.png";
// foto da seção dos objetivos, a imagem que é uma escada
import steps from "../../Images/Goals/steps.png";



function Home() {
    return (
        <>
            <header className="home">
                <div className="home_main_div">
                    <div className="home_image_div">
                        <img src={aboutme} alt=""/>
                    </div>

                    <div className="home_text_div">
                        <h1>Oi,<br /> sou o Felipe,<br /> Front-End Dev</h1>
                        <p>Desenvolvedor Web Front-End criativo e analítico que tem como objetivo transformar UI/UX designs em códigos limpos, organizados, e fiéis aos layouts solicitados.</p>
                        <Popup />
                    </div>
                </div>
            </header>










            {/* barra azul com símbolos das linguagens logo abaixo da primeira section da página home */}
            <Symbols />










            <section className="skills">
                <h2>Habilidades</h2>
                <div className="grid_container">
                    <div className="grid_item i_1">
                        <h3>Inglês Avançado</h3>
                        <p>O motivo que me faz aprender mais rápido, ter um código mais coeso, e me permite fazer conexões com devs de outros países</p>
                    </div>
                    <div className="grid_item i_2">
                        <h3>Base Fundamental</h3>
                        <p>Foquei muito na construção de uma boa base dos fundamentos, para entender os conceitos e os porquês</p>
                    </div>
                    <div className="grid_item i_3">
                        <h3>Ferramentas</h3>
                        <p>HTML, CSS, JavaScript, React, Chrome Dev Tools, GitHub, Netlify, PHP, WordPress, Bootstrap, etc</p>
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
                        <p>Além do SEO técnico, entendo bem sobre content SEO, o que facilita bastante a minha conexão com profissionais de marketing</p>
                    </div>
                </div>
            </section>










            <section className="aboutme">
                <h2>Sobre Mim</h2>
                <div className="aboutme_main_div">
                    <div className="aboutme_img_div">
                        <img src={pic} alt="Felipe Catete" />
                    </div>
                    <p>Estou em busca da evolução na minha carreira como programador, por isso procuro por uma empresa com profissionais motivados que em troca receberão toda a minha dedicação e ajuda.</p>
                </div>
            </section>










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
        </>
    )
}

export default Home
