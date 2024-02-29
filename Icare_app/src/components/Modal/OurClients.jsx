import React from "react";
import "./ModalContent.css";
import Button from "../../ButtonComponent/Button";

export function OurClientsModal({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR CLIENTS</h1>
            <p  className="client-ptag">
              Our website is a right choice for someone who seeks caring,
              reliable and verified caregiver.</p>
     
             <p className="client-ptag">We are taking care of all the formailities! </p>
            
          </header>
          <footer className="click-button">
          <Button onClick={Hide}>Close</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
