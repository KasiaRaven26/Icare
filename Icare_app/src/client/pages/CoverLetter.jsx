import ClientHeader from "../ClientHeader";
import { Footer }  from "../../components/Footer";
import styles from "./YourDetails.module.css";


const CoverLetter =() => {
    return (
        <div className={styles.pageRootGrid}>
      <div className={styles.header}>
        <ClientHeader />
      </div>
      <div className={styles.content}>
        Your cover letter will be here
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
    );
}
 export default CoverLetter;