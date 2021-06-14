import React from "react";
import "../Styles/Footer.css";
import linkedin from "../Images/Footer/linkedin_svg.png";
import github from "../Images/Footer/github_svg.png";
import gmail from "../Images/Footer/gmail_svg.png";



function Footer() {
    return (
        <section className="footer">
            <div className="footer_main_div">
                <div class="footer_text_div">
                    <h2>Entre Em Contato</h2>
                    <p><b>Fique à vontade para conhecer as minhas redes sociais ou entrar em contato comigo!</b></p>
                    <p className="ps"><b>PS</b> O código desse site foi desenvolvido por mim e está em um repositório privado. Será disponibilizado apenas para contratantes ou clientes.</p>
                </div>

                <a href="https://www.linkedin.com/in/felipe-catete/" target="_blank">
                    <div class="all_rectangles linkedin_rectangle">
                        <img src={linkedin} alt="LinkedIn" width="30px" height="30px" />
                    </div>
                </a>
            
                <a href="https://github.com/felipe-catete" target="_blank">
                    <div class="all_rectangles github_rectangle">
                        <img src={github} alt="GitHub" width="30px" height="30px" />
                    </div>
                </a>

                <a href="mailto: catetedev@gmail.com">
                    <div class="all_rectangles email_rectangle">
                        <img src={gmail} alt="Gmail" width="30px" height="30px" />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Footer

