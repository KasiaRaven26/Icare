import styles from "./ClientHomePage.module.css";
import ClientHeader from "./ClientHeader";

import ClientContent from "./ClientContent";
import ClientSideBar from "./ClientSideBar";
import ClientFooter from "./ClientFooter";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ClientHomePage = () => {
  // return (
  // <div className="container">
  //   <div className="header">
  //     <ClientHeader />
  //   </div>
  //   <div className="side-bar">
  //     <ClientSideBar />
  //   </div>
  //   <div className="content">
  //     <ClientContent />
  //   </div>
  //   <div className="footer">
  //     <ClientFooter />
  //   </div>
  // </div>
  // const [showButtons, setShowButtons] = useState(true);
  // const [showLogin, setShowLogin] = useState(false);

  // const buttonTrigger = (result) => {
  //   setShowButtons(result);
  // };

  // const handleShowLogin = () => {
  //   setShowLogin(!showLogin);
  // };

  return (
    <div className={styles.pageRootGrid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}><ClientContent /></div>
      <div className={styles.footer}>
        <Footer />
      </div>

      {/* <div>
          <div>{showLogin ? <Login closeModal={handleShowLogin} /> : null}</div>
        </div>
        */}
    </div>
  );
};


export default ClientHomePage;
