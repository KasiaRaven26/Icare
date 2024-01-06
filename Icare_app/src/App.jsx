import "./App.css";
import { Header } from "./components/Header";
import { Agenda } from "./components/ContetItems/Agenda";
import { Center } from "./components/Center";
import { Modal } from "./components/Modal";
import { Words } from "./components/Words";
import { Locations } from "./components/ContetItems/Locations";
import { JoinUs } from "./components/ContetItems/JoinUs";
import { OurClients } from "./components/ContetItems/OurClients";
import { OurCaregivers } from "./components/ContetItems/OurCaregivers";

function App() {
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

      <div className="item2"></div>
      <div className="item6"></div>
      <div className="item7"></div>
      <div className="item5">Footer</div>
      {/* <Header />
      <Footer />
      <Center />
      <Modal />
      <Words /> */}
    </div>
  );
}

export default App;
