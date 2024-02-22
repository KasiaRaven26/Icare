import { useState } from "react";
import "./ClientContent.css";
import Card from "./Card";
import ClientSideBar from "./ClientSideBar";
import PersonalDetailsCard from "./pages/personal-details/PersonalDetailsCard";
import FindCaregiversCard from "./pages/homepage/FindCaregiversCard";
import YourMessagesCard from "./pages/homepage/YourMessagesCard";
import ResumeCard from "./pages/homepage/ResumeCard";



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
            <PersonalDetailsCard> </PersonalDetailsCard>
          </div>
          <div
            onClick={handleToggleCards}
            className={toggleCards ? "cover-letter-closed" : "cover-letter-open"}
          >
          <FindCaregiversCard></FindCaregiversCard>
          </div>
        </div>

        <div className="card-container-bottom">
          <div className="my-messages">
            <YourMessagesCard></YourMessagesCard>
          </div>

          <div className="resume">
            <ResumeCard></ResumeCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientContent;
