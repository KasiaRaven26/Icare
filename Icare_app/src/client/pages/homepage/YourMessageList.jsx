import image from "/images/StockPhotoImage1.jpg";
import styles from "./YourCurrentCareGiver.module.css";

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
                Hi Adam. How are you today? I saw your profile and wanted to say
                hello.
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}>12:51am</div>
            <button>Contact</button>
          </div>
        </div>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Adam Kirwan</div>
              <div>
                Hi Adam. How are you today? I saw your profile and wanted to say
                hello.
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}>12:51am</div>
            <button>Contact</button>
          </div>
        </div>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Adam Kirwan</div>
              <div>
                Hi Adam. How are you today? I saw your profile and wanted to say
                hello.
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}>12:51am</div>
            <button>Contact</button>
          </div>
        </div>
        <div className={styles.messageListItem}>
          <img className={styles.smallLogo} src={image}></img>
          <div className={styles.messageListItemText}>
            {/* <div className={styles.messageListItemTextContainer}> */}
              <div className={styles.name}>Adam Kirwan</div>
              <div>
                Hi Adam. How are you today? I saw your profile and wanted to say
                hello.
              </div>
            {/* </div> */}
          </div>
          <div>
            <div className={styles.messageListItemTimeContainer}>12:51am</div>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourMessageList;
