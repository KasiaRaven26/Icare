import { useState } from "react";
import "./ClientContent.css";
import Card from "./Card";
import ClientSideBar from "./ClientSideBar";

const ClientContent = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleSidebar = () => {
    console.log(sidebarOpen);
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <div className="content-grid-container">
      <div className="personal-details">
        <Card>Personal details</Card>
      </div>
      <div className="my-messages">
        <Card> Your Messages</Card>
      </div>
    
      <div className="my-history">
        <Card>Cover letter</Card>
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
