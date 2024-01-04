import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Center } from "./components/Center";
import { Modal } from "./components/Modal";
import { Words } from "./components/Words";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Center />
      <Modal />
      <Words />
    </>
  );
}

export default App;
