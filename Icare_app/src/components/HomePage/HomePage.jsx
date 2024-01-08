import "./HomePage.css";
import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";
import carer from "../../components/ContetItems/carer.jpg"
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ModalContent } from "../Modal/ModalContent";

function HomePage() {
    const [showButtons, setShowButtons] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const buttonTrigger = (result) => {
      setShowButtons(result);
      console.log(result)
    }

    const ShowTheModalButton = () => {
      setShowModal(true)
    }
    const HideTheModalButton = (result) => {
      setShowModal(result)
    }

  const myStyle = {
    backgroundImage:
    `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle} >
      <div>
      {showModal ? <ModalContent HidingTheButton={HideTheModalButton}/> : null}
      </div>
      <div className="Header">
        <Header />
      </div>
      <div>
        <Content showButtons={showButtons}/>
      </div>
      <div className="footer">
        <Footer anotherResult={buttonTrigger}/>
        <button onClick={ShowTheModalButton}>Show Modal</button>
      </div>
    </div>
  );
}

export default HomePage;
