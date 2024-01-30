import React from "react";
import "./modal.css";
import Button from "../../ButtonComponent/Button";


export function Modal({ HidingTheForm }) {
  const Hide = () => {
    HidingTheForm(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <h1 className="highlight">SUBMIT FORM</h1>
          </header>
          <div>
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
          </div>
          <footer className="click-button">
            <Button onClick={Hide}>Close</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
