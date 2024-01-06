import "./App.css";
import { Header } from "./components/Header";
import { Agenda } from "./components/ContetItems/Agenda";
import { Center } from "./components/Center";
import { Modal } from "./components/Modal";
import { Words } from "./components/Words";
import { Locations } from "./components/ContetItems/Locations";
import { JoinUs } from "./components/ContetItems/JoinUs";

function App() {
  return (
    <div className="grid-container">
      <div className="item1"><Header /></div>
      <div className="item3">Modal</div>
      <div className="item2">
        <Agenda />
      </div>
      <div className="item3">
        <Locations />
      </div>
      <div className="item2">Modal</div>
      <div className="item3">Modal</div>
      <div className="item2">
        <JoinUs />
      </div>
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
