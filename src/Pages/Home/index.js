import React from "react";
import "./styles.css";

// COMPONENTES
//botão do "Entre em contato" na section 1
import Popup from "../../Components/Popup/index";
// barra azul com símbolos das linguagens
import Symbols from "./Section-2/index";

// IMAGENS
// section 1
import computer from "../../Images/Home/Section-1/computer.gif";
// section 4
import github from "../../Images/Home/Section-4/github.png";
// section 5
import pic from "../../Images/Home/Section-5/profile_pic.png";
// section 6
import vivadi from "../../Images/Home/Section-6/vivadi.png";
// section 7
import steps from "../../Images/Home/Section-7/steps.png";



function Home() {
    return (
        <>
            <header className="home_section1">
                <div className="home_section1_main_div">
                    <div className="home_section1_image_div">
                        <img src={computer} />
                    </div>

                    <div className="home_text_div">
                        <h1>Oi,<br /> sou o Felipe,<br /> Front-End Dev</h1>
                        <p>Desenvolvedor Web Front-End criativo e analítico que tem como objetivo transformar UI/UX designs em códigos limpos, organizados, e fiéis aos layouts solicitados.</p>
                        <Popup />
                    </div>
                </div>
            </header>









            {/* SECTION 2 */}
            {/* barra azul com símbolos das linguagens logo abaixo da primeira section da página home */}
            <Symbols />










            <section className="home_section3">
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
                        <p>HTML, CSS, Vanilla JavaScript, React, Chrome Dev Tools, GitHub, Netlify, WordPress, Bootstrap, etc</p>
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










            <section className="home_section4">
                <div className="github_div_img">
                    <img src={github} />
                </div>
                <div>
                    <h2>Repositórios</h2>
                    <p>Confira alguns dos meus projetos no GitHub!</p>
                    <ul>
                        <li><b>EXEMPLOS:</b></li>
                        <li>ReactJS---Vivadi----EdTech-Startup</li>
                        <li>VanillaJS---Drag-and-Drop-List</li>
                        <li>ReactJS---felipecatete.com</li>
                        <li>VanillaJS---Light-Dark-Theme-Button-Toggle</li>
                    </ul>
                    <div className="github_div_button">
                        <a href="https://github.com/felipe-catete?tab=repositories" target="_blank">Conheça meu Repositório</a>
                    </div>
                </div>
            </section>










            <section className="home_section5">
                <h2>Sobre Mim</h2>
                <div className="home_section5_main_div">
                    <div className="home_section5_img_div">
                        <img src={pic} />
                    </div>
                    <p>Estou em busca da evolução na minha carreira como programador, por isso procuro por uma empresa com profissionais motivados que em troca receberão toda a minha dedicação e ajuda.</p>
                </div>
            </section>










            <section className="home_section6">
                <div className="home_section6_text_div">
                    <h2>Meu projeto preferido feito com React</h2>
                    <p>Eu simulei o desenvolvolvimento front-end de uma Edtech Startup que visa desenvolver soft skills de crianças e adolescentes. Eles haviam criado a plataforma em um CMS e queriam migrar para um código original da empresa. Achei a idéia interessante e fiz a simulação do que seria um trabalho profissional para colocar em prática o que eu venho aprendendo. <b>P.S. O código da plataforma está disponível no meu repositório.</b></p>
                    <br />
                    <span>• CLIQUE NA IMAGEM E ACESSE O SITE!</span>
                </div>
                <div className="home_section6_img_div">
                    <a href="https://vivadi.netlify.app/"  target="_blank">
                        <img src={vivadi} href/>
                    </a>
                </div>
            </section>










            <section className="home_section7">
                <div className="home_section7_main_div">
                    <div className="home_section7_img_div">
                        <img src={steps} />
                    </div>

                    <div className="home_section7_text_div">
                    <h2>Objetivos</h2>
                    <p>Quero ajudar a minha equipe com a minha energia e com o máximo do meu conhecimento, buscando solucionar problemas, ajudando o próximo e consequentemente evoluindo como programador.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
