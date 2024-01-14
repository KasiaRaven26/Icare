import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { Modal } from "./components/Modal/Modal";


function App() {
  return (
    <div>
      <div>Header</div>
      <div>SideBar</div>
      <div>Content</div>
      <div>Footer</div>
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
