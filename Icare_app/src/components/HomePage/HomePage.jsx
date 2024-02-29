import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";
import styles from "./Homepage.module.css"
import { useState } from "react";
import { Login } from "../login/Login";

function HomePage() {
  const [showButtons, setShowButtons] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const buttonTrigger = (result) => {
    setShowButtons(result);
  };

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
    
  };


  return (
    <div className={styles.pageRootGrid}>
      <div>
        <div>{showLogin ? <Login closeModal={handleShowLogin} /> : null}</div>
      </div>
      <div className={styles.header}>
        <Header/> 
      </div >
      <div className={styles.content}>
         <Content /> 
      </div >
      <div className={styles.footer}>
         <Footer anotherResult={buttonTrigger} />
      </div>
    </div>
  );
}

export default HomePage;
