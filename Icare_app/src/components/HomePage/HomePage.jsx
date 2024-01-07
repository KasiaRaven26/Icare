import "./HomePage.css";
import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";
import carer from "../../components/ContetItems/carer.jpg"
import { useState } from "react";

function HomePage() {
    const [showButtons, setShowButtons] = useState(true)

    const buttonTrigger = (result) => {
      setShowButtons(result);
      console.log(result)
      
    }

  const myStyle = {
    backgroundImage:
    `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle} >
      <div className="Header">
        <Header />
      </div>
      <div>
        <Content showButtons={showButtons}/>
      </div>
      <div className="footer">
        <Footer anotherResult={buttonTrigger}/>
      </div>
    </div>
  );
}

export default HomePage;
