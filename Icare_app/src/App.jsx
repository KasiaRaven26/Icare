import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ClientHomePage from "./client/ClientHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client">
          <Route index={true} element={<ClientHomePage />}></Route>
          <Route path="personal" element={<HomePage />} />
          <Route path="cover-letter" element={<HomePage />} />
          <Route path="your-details" element={<HomePage />} />
          <Route path="resume" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
