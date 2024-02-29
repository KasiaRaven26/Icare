import React from "react";
import "./ModalContent.css";
import Button from "../../ButtonComponent/Button";


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
          <div>
            <p>
              Our platform has been created to connect clients with caregivers
              in The Netherlands, Germany and Italy.
            </p>
            <p>On the private basis with full safety.</p>
            <p className="border-radius"> For both sides. </p>
          </div>
          <footer className="click-button">
            <Button onClick={Hide}>Close</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
