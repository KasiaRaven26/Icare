import { useState } from "react";
import ClientHeader from "../../ClientHeader";
import ClientFooter from "../../ClientFooter";
import styles from "./ClientMessages.module.css";
import ClientSideBar from "../../ClientSideBar";
import ClientMessageList from "./ClientMessageList";

const ClientMessages =() => {

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
              <ClientMessageList />
          </div>
        </div>
      <div className={styles.footer}>
        <ClientFooter />
      </div>
    </div>
    );
}
 export default ClientMessages;