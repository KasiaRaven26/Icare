import ClientHeader from "../ClientHeader";
import { Footer } from "../../components/Footer";
import styles from "./YourDetails.module.css";

const Resume = () => {
    return (
        <div className={styles.pageRootGrid}>
        <div className={styles.header}>
          <ClientHeader />
        </div>
        <div className={styles.content}>
          Your resume will be here
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div> 
    );
};
export default Resume;