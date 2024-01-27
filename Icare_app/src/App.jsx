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
          <Route path="personal" element={<PersonalDetails />} />
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="your-details" element={<YourDetails />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
