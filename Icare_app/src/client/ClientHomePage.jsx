import "./ClientHomePage.css";
import ClientHeader from "./ClientHeader";

import ClientContent from "./ClientContent";
import ClientSideBar from "./ClientSideBar";
import ClientFooter from "./ClientFooter";

const ClientHomePage = () => {
  return (
    <div className="container">
      <div className="header">
        <ClientHeader />
      </div>
      <div className="side-bar">
        <ClientSideBar />
      </div>
      <div className="content">
        <ClientContent />
      </div>
      <div className="footer">
        <ClientFooter />
      </div>
    </div>
  );
};

export default ClientHomePage;
