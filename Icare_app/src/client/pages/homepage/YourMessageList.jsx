import image from "/images/StockPhotoImage1.jpg";
import styles from "./YourCurrentCareGiver.module.css";
import image2 from "/images/thereseansingh.jpg";

const YourMessageList = () => {
  //   const handleContact = () => {
  //     console.log("contact");
  //   };
  return (
    <div className={styles.card}>
      <h1 className={styles.header}>your inbox</h1>
      <div className={styles.content}>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Adam Kirwan</div>
              <div>
                Hi Samantha,I saw your profile and I would like to disscuss job offer with you.
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}>12/03/2024</div>
            <button className={styles.contactbutton}>reply</button>
          </div>
        </div>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Edward Loy</div>
              <div>
                Hi Samantha.Are you interested to work part time in care?
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}> 14/03/2024</div>
            <button className={styles.contactbutton}>reply</button>
          </div>
        </div>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image2}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Therese Ansingh</div>
              <div>
                Hello Samantha.I like your profile you seem like interesting candidate.Can you please reach me out?
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}> today 8:40AM</div>
            <button className={styles.contactbutton}>reply</button>
          </div>
        </div>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Ingrid Wilstein</div>
              <div>
                Good morning Samantha. How are you today? Are you still looking for a job?
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}>15/03/2024</div>
            <button className={styles.contactbutton}>reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourMessageList;
