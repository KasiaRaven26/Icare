import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Center } from "./components/Center";
import { Modal } from "./components/Modal";
import { Words } from "./components/Words";

function App() {
  return (
    <div className="grid-container">
      <div className="item1"><Header /></div>
      <div className="item3">Modal</div>
      <div className="item2">Our Agenda</div>
      <div className="item3">Locations</div>
      <div className="item2">Modal</div>
      <div className="item3">Modal</div>
      <div className="item2">Join Us</div>
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
