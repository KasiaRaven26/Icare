import { Outlet, Link } from "react-router-dom";
import carer from "./carer.jpg";
import { ContentItem } from "./ContentItem";
import "./Content.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ModalContent } from "../Modal/ModalContent";
import { OurLocationsModal } from "../Modal/OurLocationsModal";
import { OurCaregiversModal } from "../Modal/OurCaregiversModal";
import { OurClientsModal } from "../Modal/OurClients";

function Content() {
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);
  const [showOurAgenda, setShowOurAgenda] = useState(false);
  const [showOurLocations, setShowOurLocations] = useState(false);
  const [showOurCaregivers, setShowOurCaregivers] = useState(false);
  const [showOurClients, setShowOurClients] = useState(false);

  const handleOurAgenda = () => {
    setShowOurAgenda(!showOurAgenda);
  };
  const handleJoinUsModal = () => {
    setShowJoinUsModal(!showJoinUsModal);
  };
  const handleOurLocations = () => {
    setShowOurLocations(!showOurLocations);
  };
  const handleOurCaregivers = () => {
    setShowOurCaregivers(!showOurCaregivers);
  };
  const handleOurClients = () => {
    setShowOurClients(!showOurClients);
  };

  const myStyle = {
    backgroundImage: `url(${carer})`,
    // opacity:0.7
  };


  return (
    <div id="outer-container" style={myStyle}>
      {showJoinUsModal ? <Modal HidingTheForm={handleJoinUsModal} /> : null}
      {showOurAgenda ? (
        <ModalContent HidingTheButton={handleOurAgenda} />
      ) : null}
      {showOurLocations ? (
        <OurLocationsModal HidingTheButton={handleOurLocations} />
      ) : null}
      {showOurCaregivers ? (
        <OurCaregiversModal HidingTheButton={handleOurCaregivers} />
      ) : null}
      {showOurClients ? (
        <OurClientsModal HidingTheButton={handleOurClients} />
      ) : null}
      <div className="grid-container">
        <div className="agenda">
          <ContentItem showModal={handleOurAgenda}> Our Agenda</ContentItem>
        </div>
        <div className="location">
          <ContentItem showModal={handleOurLocations}>
            Our Locations
          </ContentItem>
        </div>
        <div className="our-clients">
          <ContentItem showModal={handleOurClients}>Our Clients</ContentItem>
        </div>
        <div className="join-us">
          <ContentItem showModal={handleJoinUsModal}>Join Us</ContentItem>
        </div>
        <div className="donate">
          <ContentItem showModal={handleOurCaregivers}>
            Our Caregivers
          </ContentItem>
        </div>
      </div>
    </div>
  );
}

export default Content;
