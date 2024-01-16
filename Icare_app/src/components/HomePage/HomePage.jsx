// import "./HomePage.css";
// import Content from "../ContetItems/Content";
// import { Header } from "../Header";
// import { Footer } from "../Footer";
import styles from "./Homepage.module.css"
// import carer from "../../components/ContetItems/carer.jpg";
// import { useState } from "react";
// import { Login } from "../login/Login";
// import { OurLocationsModal } from "../Modal/OurLocationsModal";

function HomePage() {
  // const [showButtons, setShowButtons] = useState(true);
  // const [showLogin, setShowLogin] = useState(false);

  // const buttonTrigger = (result) => {
  //   setShowButtons(result);
  // };

  // const handleShowLogin = () => {
  //   setShowLogin(!showLogin);
  // };

  // const myStyle = {
  //   backgroundImage: `url(${carer})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   height :"100%"
  // };

  return (
    <div className={styles.pageRootGrid}>
      {/* <div style={"height : 100%"}> */}
      {/* <div>
        <div>{showLogin ? <Login closeModal={handleShowLogin} /> : null}</div>
      </div> */}
      <div className={styles.header}>
        {/* <Header handleShowLogin={handleShowLogin} /> */}
      </div >
      {/* <div className="content"> */}
      <div className={styles.content}>
        {/* <Content showButtons={showButtons} /> */}
      </div >
      {/* <div className="footer"> */}
      <div className={styles.footer}>
        {/* <Footer anotherResult={buttonTrigger} /> */}
      </div>
    </div>
  );
}

export default HomePage;
