// import ReactDOM from "react-dom/client"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage/HomePage";
// import { Modal } from "./components/Modal/Modal";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">Header</div>
      <div className="side-bar-content-container">
        <div className="side-bar">SideBar</div>
        <div className="content">Content</div>
      </div>
      <div className="footer">Footer</div>
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
