import React from "react";
import "./ModalContent.css";

export function ModalContent({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR AGENDA</h1>
          </header>
          <body>
            <p>
              Our platform has been created to connect clients with caregivers
              in The Netherlands, Germany and Italy.
            </p>
            <p>On the private basis with full safety.</p>
            <p className="border-radius">For both sides.</p>
          </body>
          <footer className="click-button">
            <button onClick={Hide}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
