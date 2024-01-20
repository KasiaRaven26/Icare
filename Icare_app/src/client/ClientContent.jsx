import { useState } from "react";
import "./ClientContent.css";
import Card from "./Card";
import ClientSideBar from "./ClientSideBar";

const ClientContent = () => {

  // const [sidebarOpen, setSideBarOpen] = useState(false);


  const handleSidebar = () => {
    console.log("Open or closed");
  }

  return (
    <div className="content-grid-container">
      <div className="personal-details">
        <Card>Personal details</Card>
      </div>
      <div className="my-messages">
        <Card>Messages</Card>
      </div>
      <div className="my-history">
        <Card>Diary</Card>
      </div>
      <div className="something-else">
        <Card>Something Else</Card>
      </div>
      <div  onClick={handleSidebar} className="side-bar-client">
        {/* {sidebarOpen ? <ClientSideBar /> : <ClientSideBarClosed />} */}
        <ClientSideBar/>
      </div>
    </div>
  );
};

export default ClientContent;
