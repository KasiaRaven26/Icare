import styles from "./ClientHomePage.module.css";
import ClientContent from "./ClientContent";
import { Footer } from "../components/Footer";
import ClientHeader from "./ClientHeader";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ClientHomePage = () => {
  return (
    <div className={styles.pageRootGrid}>
      <div className={styles.header}>
        <ClientHeader />
      </div>
      <div className={styles.content}>
        <ClientContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ClientHomePage;
