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
                            <span className="cont_1"><b>E-mail:</b> <a href="#">catetedev@gmail.com</a></span>
                        </div>
                        <div>
                            <span className="cont_2"><b>Telefone:</b> <a href="#">(21) 98111-8452</a></span>
                        </div>
                        <div>
                            <span className="cont_3"><b>LinkedIn:</b> <a href="#">https://www.fonf.com</a></span>
                        </div>
                    </div>
                </div>
    </>,
    document.getElementById('portal')
    )
}