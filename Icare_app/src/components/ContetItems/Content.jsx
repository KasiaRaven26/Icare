import { Outlet, Link } from "react-router-dom";
import { Agenda } from "../ContetItems/Agenda";
import { Locations } from "../ContetItems/Locations";
import { OurClients } from "../ContetItems/OurClients";
import { JoinUs } from "../ContetItems/JoinUs";
import { Donate } from "../ContetItems/Donate";
import carer from './carer.jpg'
import "./Content.css"

function Content() {
  const myStyle = {
    backgroundImage:
    `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};

  return (
    <div className="grid-container">
       
      <div className="agenda">
       <Agenda />
      </div>
      <div className="location">
        <Locations />
      </div>
      <div className="our-clients">
        <OurClients />
      </div>
      <div className="join-us">
        <Link style={{ textDecoration: 'none', color: 'inherit', fontWeight: "inherit"}} to="form">
          <JoinUs />
        </Link>
      </div>
      <div className="donate"><Donate /></div>
    </div>
  );
}

export default Content;
