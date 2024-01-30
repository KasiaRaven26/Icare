import styles from "./YourDetails.module.css";
import ClientContent from "../ClientContent";
import ClientHeader  from "../ClientHeader";
import { Footer } from "../../components/Footer";


const YourDetails = () => {
    return (
       <div className={styles.pageRootGrid}>
      <div className={styles.header}>
        <ClientHeader />
      </div>
      <div className={styles.content}>
        Your details content will be here
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>

);
};
export default YourDetails;