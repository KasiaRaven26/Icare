import { Outlet, Link } from "react-router-dom";
import { Agenda } from "../ContetItems/Agenda";
import { Locations } from "../ContetItems/Locations";
import { OurClients } from "../ContetItems/OurClients";
import { JoinUs } from "../ContetItems/JoinUs";
import { OurCaregivers } from "./OurCaregivers";
import carer from "./carer.jpg";
import { ContentItem } from "./ContentItems";
import "./Content.css";
import { Button } from "./Button";

function Content({ showButtons }) {
  const myStyle = {
    backgroundImage: `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="grid-container">
      {console.log(showButtons)}
      <div className="agenda">
      <ContentItem>Our Agenda</ContentItem>
      </div>
      <div className="location">
      <ContentItem>Our Locations</ContentItem>
      </div>
      <div className="our-clients">
      <ContentItem>Our Clients</ContentItem>
      </div>
      <div className="join-us">
      <ContentItem>Join Us</ContentItem>
      </div>
      <div className="donate">
      <ContentItem>Our Caregivers</ContentItem>
      </div>
    </div>
  );
}

export default Content;
