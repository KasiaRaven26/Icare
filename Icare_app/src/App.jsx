// import ReactDOM from "react-dom/client"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage/HomePage";
// import { Modal } from "./components/Modal/Modal";
import Card from "./client/Card";
import "./App.css";
import ClientHeader from "./client/ClientHeader";

function App() {
  return (
    <div className="container">
      <div className="header"><ClientHeader /></div>
      <div className="footer">Footer</div>
      <div className="side-bar">Side bar</div>
      <div className="content">
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

          {/* <Card>adssa</Card>
          <Card>adssa</Card> */}
        </div>
      </div>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}/>
    //     <Route path="/car" element={<Modal />}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
