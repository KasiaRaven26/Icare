import "./ClientContent.css";
import Card from "./Card";
import { GoChevronRight } from "react-icons/go";

const ClientContent = () => {
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
      <div className="side-bar-client">
        <GoChevronRight size={50} />
      </div>
    </div>
  );
};

export default ClientContent;
