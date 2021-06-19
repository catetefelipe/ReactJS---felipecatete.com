import React from "react";
import ReactDom from "react-dom";
import "../Styles/Popup.css";



const MODAL_STYLES = {
    width: "75%",
    maxWidth: "600px" ,
    height: "50%",
    maxHeight: "300px" ,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    borderRadius: "10px",
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)" ,
    zIndex: 1000
}



export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
    <>
                <div style={OVERLAY_STYLES} />
                <div style={MODAL_STYLES}>
                    <button onClick={onClose} className="close_button">x</button>
                    {children}

                    <div className="contact_infos">
                        <div>
                            <span className="ctt_1"><a href="mailto: catetedev@gmail.com">catetedev@gmail.com</a></span>
                        </div>
                        <div>
                            <span className="ctt_2"><a href="https://www.linkedin.com/in/felipe-catete/" target="_blank">LinkedIn</a></span>
                        </div>
                    </div>
                </div>
    </>,
    document.getElementById('portal')
    )
}