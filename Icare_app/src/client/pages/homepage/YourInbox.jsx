import image from "/images/StockPhotoImage1.jpg";
import styles from "./YourCurrentCareGiver.module.css";

const YourInbox = () => {
  const handleContact = () => {
    console.log("contact");
  };
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>your inbox</h1>
      <div className={styles.content}>
        <div>
          <div className={styles.imageAndMessage}>
            <img className={styles.smallLogo} src={image}></img>
            <div className={styles.clientsmessages}>
              Hi Samantha,I would like to disscuss a job offer with you!Are you
              available?
            </div>
          </div>
          <div className={styles.caregiversmessages}>
            <div className={styles.bubbleArrow}></div>
            Yes sure!When would it suit you best to have a conversation?Best
            regards,Samantha.
          </div>
          <div className={styles.clientsmessages}>
            Lets say 4PM UK time on Saturday?
          </div>
          <div className={styles.clientsmessages}>
            Oh sorry!Can we make it 5PM instead?
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.contact} onClick={handleContact}>
            reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourInbox;
