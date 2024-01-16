import "./ClientContent.css";
import Card from "./Card";

const ClientContent = () => {
  return (
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
    </div>
  );
};

export default ClientContent;