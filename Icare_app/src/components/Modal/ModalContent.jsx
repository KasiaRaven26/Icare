import React from "react";
import "./ModalContent.css";

export function ModalContent({HidingTheButton}) {

    const Hide = () => {
        HidingTheButton(false);
    }

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <header>
                        <div className="close">
                            <span className="close-btn">
                                &times;
                            </span>
                        </div>
                        <h1>Our Agenda</h1>
                    </header>
                    <body>
                    </body>
                    <footer>
                        <button onClick={Hide}>Close</button>
                    </footer>
                </div>
            </div>
         
        </div>
    );
}

