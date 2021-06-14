import React from "react";
import "../Styles/Home.css";
import aboutme from "../Images/Home/aboutme.png";
import Popup from "./Popup";



function Home() {
    return (
        <header className="home">
            <div className="home_main_div">
                <div className="home_image_div">
                    <img src={aboutme} alt=""/>
                </div>

                <div className="home_text_div">
                    <h1>Oi,<br /> sou o Felipe,<br /> Front-End Dev</h1>
                    <p>Desenvolvedor Web Front-End criativo e analítico que tem como objetivo transformar UI/UX design layouts em códigos limpos, organizados, e fiéis aos layouts solicitados.</p>
                    <Popup />
                </div>
            </div> {/* ---- closing main_div ---- */}
        </header>
    )
}

export default Home
