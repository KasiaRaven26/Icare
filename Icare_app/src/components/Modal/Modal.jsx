import React from "react";
import "./modal.css";

export function Modal(props) {
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
                        <h1>Modal Title</h1>
                    </header>
                    <body>
                        <form>
                            <div>
                                <label>Full Name</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Email Address</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Phone number</label>
                                <input type='text' />
                            </div>
                            <div>
                                <button>Register with us</button>
                            </div>
                        </form>
                    </body>
                    <footer>
                        <button>Close</button>
                    </footer>
                </div>
            </div>
         
        </div>
    );
}

