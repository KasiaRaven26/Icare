import React from "react";
import "./ModalContent.css";

export function ModalContent({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1>OUR AGENDA</h1>
          </header>
          <body>
            <p>
              Our platform has been created to connect clients with caregivers
              in The Netherlands, Germany and Italy.
            </p>
            <p>On the private basis with full safety.</p>
            <p>For both sides.</p>
          </body>
          <footer>
            <button onClick={Hide}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
