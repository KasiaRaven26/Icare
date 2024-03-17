import { useState } from "react";
import "./ClientContent.css";
import ClientSideBar from "./ClientSideBar";
import YourMessagesCard from "./pages/homepage/YourMessagesCard";
import ResumeCard from "./pages/homepage/ResumeCard";
import AvailableJobsCard from "./pages/homepage/AvailableJobsCard";
import YourCurrentCareGiver from "./pages/homepage/YourCurrentCareGiver";
import YourInbox from "./pages/homepage/YourInbox"
import YourMessageList from "./pages/homepage/YourMessageList";


const ClientContent = () => {
  // const [sidebarOpen, setSideBarOpen] = useState(false);

  // const handleSidebar = () => {
  //   setSideBarOpen(!sidebarOpen);
  // };

  return (
    <div className="content-grid-container">
      {/* <div onClick={handleSidebar} className="client-side-bar">
        <ClientSideBar sideBarOpen={sidebarOpen} />
      </div> */}

      <div className="card-container">
        <div className="card-container-top">
          <div className="my-messages">
            <AvailableJobsCard />
          </div>
          <div className="my-messages">
            <YourCurrentCareGiver />
          </div>
        </div>

        <div className="card-container-bottom">
          <div className="my-messages">
            {/* <YourInbox></YourInbox> */}
            <YourMessageList></YourMessageList>
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
