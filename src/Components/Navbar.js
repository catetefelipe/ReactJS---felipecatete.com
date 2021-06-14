import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Styles/Navbar.css";



export default class Navbar extends Component {

render() {
    return (
        <nav className="nav" id="navbar">
            <div className="nav_main_div">
                <div>
                    <span>Felipe Catete</span>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                            Habilidades
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                            Sobre Mim
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="goals"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                            Objetivos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}


