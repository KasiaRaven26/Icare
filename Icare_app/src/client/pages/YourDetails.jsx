import { useState } from "react";
import styles from "./YourDetails.module.css";
import ClientHeader  from "../ClientHeader";
import { Footer } from "../../components/Footer";
import ClientSideBar from "../ClientSideBar";
import PersonalDetailsCard from "./personal-details/PersonalDetailsCard";
import PersonalDetailsCard2 from "../cards/personalDetails/PersonalDetailsCard2";


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
            <PersonalDetailsCard2 />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
    </div>

);
};
export default YourDetails;