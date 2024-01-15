import "./ClientHomePage.css";
import ClientHeader from "./ClientHeader";
import Card from "./Card";

const ClientHomePage = () => {
  return (
    <div className="container">
    <div className="header">
      <ClientHeader />
    </div>
    <div className="footer">Footer</div>
    <div className="side-bar">
      <div style={{"height" : "185px", "border-bottom":"3px solid black "}}>ICON</div>
    </div>
    <div className="content">
      <div className="content-grid-container">
        <div className="personal-details">
          <Card>Personal details</Card>
        </div>
        <div className="my-messages">
          <Card>Messages</Card>
        </div>
        <div className="contracts">
          <Card>Contracts</Card>
        </div>
        <div className="my-history">
          <Card>Diary</Card>
        </div>

        {/* <Card>adssa</Card>
        <Card>adssa</Card> */}
      </div>
    </div>
  </div>
  );
};

export default ClientHomePage;
