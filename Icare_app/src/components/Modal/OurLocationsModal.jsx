import React from "react";
import "./ModalContent.css";
import "./OurLocationsModal.css";

export function OurLocationsModal({ HidingTheButton }) {
  const Hide = () => {
    HidingTheButton();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight"> OUR LOCATIONS</h1>
          </header>
          <body>
            <div className="languages">
              <div className="language de">
                <div className="line"></div>
                <a className="button" href="/de">
                  Germany
                </a>
              </div>

              <div className="language it">
                <div className="line"></div>
                <a className="button" href="/it">
                  Italy
                </a>
              </div>

              <div className="language nl">
                <div className="line"></div>
                <a className="button" href="/nl">
                  Netherlands
                </a>
              </div>
            </div>
          </body>
          <footer className="click-button">
            <button onClick={Hide}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
