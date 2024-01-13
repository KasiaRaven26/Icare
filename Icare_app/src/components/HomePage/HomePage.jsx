import "./HomePage.css";
import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";
import carer from "../../components/ContetItems/carer.jpg";
import { useState } from "react";
import { Login } from "../login/Login"

function HomePage() {
  const [showButtons, setShowButtons] = useState(true);
  const [showLogin, setShowLogin] = useState(false)


  const buttonTrigger = (result) => {
    setShowButtons(result);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin)
  }

  const myStyle = {
    backgroundImage: `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle}>
      <div>
        <div>
         {showLogin ? <Login closeModal={handleShowLogin}/> : null} 
        </div>
      </div>
      <div className="Header">
        <Header handleShowLogin={handleShowLogin} />
      </div>
      <div>
        <Content showButtons={showButtons} />
      </div>
      <div className="footer">
        <Footer anotherResult={buttonTrigger} />
      </div>
    </div>
  );
}

export default HomePage;
