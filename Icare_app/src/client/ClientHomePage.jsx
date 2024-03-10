import { useState } from "react";
import styles from "./ClientHomePage.module.css";
import ClientContent from "./ClientContent";
import { Footer } from "../components/Footer";
import ClientHeader from "./ClientHeader";
import ClientSideBar from "./ClientSideBar";

const ClientHomePage = () => {
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
        <div onClick={handleSidebar} className="client-side-bar">
          <ClientSideBar sideBarOpen={sidebarOpen} />
        </div>
        <ClientContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ClientHomePage;
