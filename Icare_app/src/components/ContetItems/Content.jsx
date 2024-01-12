import { Outlet, Link } from "react-router-dom";
import carer from "./carer.jpg";
import { ContentItem } from "./ContentItem";
import "./Content.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ModalContent } from "../Modal/ModalContent";

function Content() {
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);

  const [showOurAgenda, setShowOurAgenda] = useState(false);
  const handleOurAgenda = () => {
    setShowOurAgenda(!showOurAgenda);
  };
  const handleJoinUsModal = () => {
    setShowJoinUsModal(!showJoinUsModal);
  };

  return (
    <div>
      {showJoinUsModal ? <Modal HidingTheForm={handleJoinUsModal} /> : null}
      {showOurAgenda ? (
        <ModalContent HidingTheButton={handleOurAgenda} />
      ) : null}
      <div className="grid-container">
        <div className="agenda">
          <ContentItem showModal={handleOurAgenda}> Our Agenda</ContentItem>
        </div>
        <div className="location">
          <ContentItem>Our Locations</ContentItem>
        </div>
        <div className="our-clients">
          <ContentItem>Our Clients</ContentItem>
        </div>
        <div className="join-us">
          <ContentItem showModal={handleJoinUsModal}>Join Us</ContentItem>
        </div>
        <div className="donate">
          <ContentItem>Our Caregivers</ContentItem>
        </div>
      </div>
    </div>
  );
}

export default Content;
