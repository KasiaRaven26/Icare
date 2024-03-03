import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ClientHomePage from "./client/ClientHomePage";
import Resume from "./client/pages/Resume";
import CoverLetter from "./client/pages/CoverLetter";
import YourDetails from "./client/pages/YourDetails";
import YourMessages from "./client/pages/YourMessages";
import Contacts from "./client/Contacts";
import { LoginNew } from "./components/login/LoginNew";
import { SignUp } from "./components/authentication/signUp/SignUp";
import ClientMessages from "./client/pages/messages/ClientMessages";

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
          <Route path="messages" element={<ClientMessages />} />
          <Route path="your-messages" element={<YourMessages />} />
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="your-details" element={<YourDetails />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="/caregiver">
          <Route index={true} element={<ClientHomePage />}></Route>
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
