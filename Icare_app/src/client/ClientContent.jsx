import { useState } from "react";
import "./ClientContent.css";
import Card from "./Card";
import ClientSideBar from "./ClientSideBar";

const ClientContent = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [toggleCards, setToggeleCards] = useState(false);

  const handleSidebar = () => {
    console.log(sidebarOpen);
    setSideBarOpen(!sidebarOpen);
  };

  const handleToggleCards = () => {
    console.log(toggleCards)
    setToggeleCards(!toggleCards)
  }

  return (
    <div className="content-grid-container">
      <div onClick={handleToggleCards} className={toggleCards ? "personal-details" : "personal-details-closed"}>
        <Card>Personal details</Card>
      </div>
      <div className="my-messages">
        <Card> Your Messages</Card>
      </div>
    
      <div onClick={handleToggleCards} className={toggleCards ? "my-history" : "my-history-open"}>
        <Card >Cover letter</Card>
      </div>
      <div className="something-else">
        <Card>Resume</Card>
      </div>
      {sidebarOpen ? (
        <div onClick={handleSidebar} className="side-bar-client">
          <ClientSideBar />
        </div>
      ) : (
        <div onClick={handleSidebar} className="side-bar-client-open">
          <ClientSideBar />
        </div>
      )}
    </div>
  );
};

export default ClientContent;
