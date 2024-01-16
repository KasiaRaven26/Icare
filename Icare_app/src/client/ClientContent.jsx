import "./ClientContent.css";
import Card from "./Card";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

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
      <div className="something-else">
        <Card>Something Else</Card>
      </div>
      <div className="side-bar-client">
        <span>
          <GoChevronLeft />
        </span>
      </div>
    </div>
  );
};

export default ClientContent;
