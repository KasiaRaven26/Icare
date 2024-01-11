import { Outlet, Link } from "react-router-dom";
import carer from "./carer.jpg";
import { ContentItem } from "./ContentItem";
import "./Content.css";
import { Button } from "./Button";

function Content({ showButtons }) {

  return (
    <div className="grid-container">
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
