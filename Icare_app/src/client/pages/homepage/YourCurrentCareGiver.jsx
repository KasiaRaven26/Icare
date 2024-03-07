import image from "/images/StockPhotoImage1.jpg";
import styles from "./YourCurrentCareGiver.module.css";

const YourCurrentCareGiver = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>Your Care Giver</h1>
      <div className={styles.content}>
        <img className={styles.logo} src={image}></img>
        <div className={styles.careGiverDetails}>
          <h3>Samantha Clien</h3>
          <div>6 years experience</div>
          <div>Contract: 23/02/24 - 23/05/24</div>
          <a href="#">Message</a>
        </div>
        <button>Contact Samantha</button>
      </div>
    </div>
  );
};

export default YourCurrentCareGiver;