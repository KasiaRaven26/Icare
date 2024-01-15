import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import ClientHomePage from "./client/ClientHomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/client" element={<ClientHomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
