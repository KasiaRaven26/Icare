import { useState } from "react";
import styles from "./YourDetails.module.css";
import ClientHeader  from "../ClientHeader";
import { Footer } from "../../components/Footer";
import ClientSideBar from "../ClientSideBar";


const YourDetails = () => {

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };


  return (
      <div className={styles.pageRootGrid}>
        <div className={styles.header}>
          <ClientHeader />
        </div>
        <div className={styles.content}>
          <div className={styles.clientGridContainer}>
            <div onClick={handleSidebar} className="client-side-bar">
              <ClientSideBar sideBarOpen={sidebarOpen}/>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
    </div>

);
};
export default YourDetails;