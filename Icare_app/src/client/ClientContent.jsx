import { useState } from "react";
import "./ClientContent.css";
import Card from "./Card";
import ClientSideBar from "./ClientSideBar";

const ClientContent = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [toggleCards, setToggeleCards] = useState(false);

  const handleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const handleToggleCards = () => {
    setToggeleCards(!toggleCards);
  };

  return (
    <div className="content-grid-container">
      <div onClick={handleSidebar} className="client-side-bar">
      <ClientSideBar sideBarOpen={sidebarOpen}/>
      </div>
      <div className="card-container">
        <div className="card-container-top">
          <div
            onClick={handleToggleCards}
            className={
              toggleCards ? "personal-details-open" : "personal-details-closed"
            }
          >
            <Card>Personal details</Card>
          </div>
          <div
            onClick={handleToggleCards}
            className={toggleCards ? "cover-letter-closed" : "cover-letter-open"}
          >
            <Card>Cover letter</Card>
          </div>
        </div>

        <div className="card-container-bottom">
          <div className="my-messages">
            <Card> Your Messages</Card>
          </div>

          <div className="resume">
            <Card>Resume</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientContent;
