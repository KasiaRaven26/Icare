import React from "react";
import "./modal.css";

export function Modal({ HidingTheForm }) {
  const handleClick = () => {
    HidingTheForm(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1>Modal Title</h1>
          </header>
          <body>
            <form>
              <div>
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="text" />
              </div>
              <div>
                <label>Phone number</label>
                <input type="text" />
              </div>
              <div>
                <button>Register with us</button>
              </div>
            </form>
          </body>
          <footer>
            <button onClick={handleClick}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
