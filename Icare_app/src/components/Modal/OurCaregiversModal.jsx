import React from "react";
import "./ModalContent.css";
import Button from "../../ButtonComponent/Button";


export function OurCaregiversModal({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR CAREGIVERS</h1>
          </header>
          <p>With us our caregivers are able to find work without worry for intermediaries charging extra fees for their reliable work.</p>
           <p> Here the employment relationship takes place directly between the client and the caregiver.</p>
          
          <body></body>
          <footer className="click-button">
             <Button onClick={Hide}>Close</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
