import "./HomePage.css";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../Header";
import { Agenda } from "../ContetItems/Agenda";
import { Locations } from "../ContetItems/Locations";
import { OurClients } from "../ContetItems/OurClients";
import { JoinUs } from "../ContetItems/JoinUs";
import { Donate } from "../ContetItems/Donate";

function HomePage() {
  return (
    <div className="grid-container">
      <div className="item1">
        <Header />
      </div>
      <div className="item3">
        <Agenda />
      </div>
      <div className="item2"></div>
      <div className="item3"></div>
      <div className="item2">
        <Locations />
      </div>
      <div className="item3">
        <OurClients />
      </div>
      <div className="item2">
      </div>
      <div className="item6"></div>
      <div className="item7">
        <Link style={{ textDecoration: 'none', color: 'inherit', fontWeight: "inherit"}} to="form">
          <JoinUs />
        </Link>
      </div>
      <div className="item6"><Donate /></div>
      <div className="item7">
       </div>
       <div className="item5">Kasia Kruk & Adam Kirwan</div>
    </div>
  );
}

export default HomePage;
