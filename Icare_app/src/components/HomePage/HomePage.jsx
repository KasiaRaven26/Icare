import "./HomePage.css";
import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";
import carer from "../../components/ContetItems/carer.jpg";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ModalContent } from "../Modal/ModalContent";

function HomePage() {
  const [showButtons, setShowButtons] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const buttonTrigger = (result) => {
    setShowButtons(result);
  };

  const ShowTheModalButton = () => {
    setShowModal(true);
  };
  const HideTheModalButton = (result) => {
    setShowModal(result);
  };

  const ShowTheForm = () => {
    setShowForm(true)
  }

  const HideTheForm = (result) => {
    setShowForm(result)
  }

  const myStyle = {
    backgroundImage: `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle}>
      <div>
        <div>
          <div>
            {showModal ? (
              <ModalContent HidingTheButton={HideTheModalButton} />
            ) : null}
          </div>
          {showForm ? <Modal HidingTheForm={HideTheForm}/> : null}
        </div>
      </div>
      <div className="Header">
        <Header />
      </div>
      <div>
        <Content showButtons={showButtons} />
      </div>
      <div className="footer">
        <Footer anotherResult={buttonTrigger} />
        <button onClick={ShowTheModalButton}>Show Modal</button>
        <button  onClick={ShowTheForm}>Show form</button>
      </div>
    </div>
  );
}

export default HomePage;
