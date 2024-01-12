import { Outlet, Link } from "react-router-dom";
import carer from "./carer.jpg";
import { ContentItem } from "./ContentItem";
import "./Content.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

function Content({ showButtons }) {
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);

  const handleJoinUsModal = () => {
    setShowJoinUsModal(!showJoinUsModal);
  };

  return (
    <div>
      {showJoinUsModal ? <Modal HidingTheForm={handleJoinUsModal} /> : null}

      <div className="grid-container">
        <div className="agenda">
          <ContentItem> Our Agenda</ContentItem>
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
