import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ClientHomePage from "./client/ClientHomePage";
import CoverLetter from "./client/pages/CoverLetter";
import YourDetails from "./client/pages/YourDetails";
import Contacts from "./client/Contacts";
import { LoginNew } from "./components/login/LoginNew";
import { SignUp } from "./components/authentication/signUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginNew />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/client">
          <Route index={true} element={<ClientHomePage />}></Route>
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="your-details" element={<YourDetails />} />
        </Route>
        <Route path="/caregiver">
          <Route index={true} element={<ClientHomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
