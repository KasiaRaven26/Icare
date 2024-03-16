import image from "/images/StockPhotoImage1.jpg";
import styles from "./YourCurrentCareGiver.module.css";

const ResumeCard = () => {
  const handleContact = () => {
    console.log("contact");
  };
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>account summary</h1>
      <div className={styles.content}>
        
        <div className={styles.careGiverDetails}>
          <h3>statements</h3>
          <div className={styles.divDetails}>Your current balance is: 358,32 €</div>
          <div className={styles.divDetails}> <strong>Note</strong>
          [For the withdrawal of your funds please contact your current employer via our application for secure payment transaction]</div>
        </div>
        <div className={styles.accountDetailsButtonDiv}>
          <button className={styles.contact} onClick={handleContact}>
            safe withdrawal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
