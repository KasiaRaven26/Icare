import "./ClientContent.css";
import Card from "./Card";
import ClientSideBar from "./ClientSideBar";

const ClientContent = () => {
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
      <div className="side-bar-client">
        <ClientSideBar />
      </div>
    </div>
  );
};

export default ClientContent;
