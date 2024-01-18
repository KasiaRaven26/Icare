import styles from "./ClientHomePage.module.css";
import ClientContent from "./ClientContent";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ClientHomePage = () => {
  return (
    <div className={styles.pageRootGrid}>
      <div className={styles.header}>
        <Header />
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
