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
              <div className="control">
                <label>E-mail address</label>
                <input type="url" />
              </div>
              <div className="control">
                <label>Home address</label>
                <input type="text" />
              </div>
              <div className="control">
                <label>Phone number</label>
                <textarea id="description"></textarea>
              </div>
              <div className="control">
                <label>Upload your resume</label>
                <input type="text" />
              </div>
              <div className="control">
                <label>2 references from your previous employer</label>
                <input type="text" />
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
