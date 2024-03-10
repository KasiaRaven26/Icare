import image from "/images/StockPhotoImage1.jpg";
import styles from "./YourCurrentCareGiver.module.css";

const YourCurrentCareGiver = () => {
  const handleContact = () => {
    console.log("contact");
  };
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>your caregiver</h1>
      <div className={styles.content}>
        <img className={styles.logo} src={image}></img>
        <div className={styles.careGiverDetails}>
          <h3>Samantha Klein</h3>
          <div>6 years of care experience</div>
          <div>Contract: 23/02/24 - 23/05/24</div>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.contact} onClick={handleContact}>
            contact Samantha
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourCurrentCareGiver;
