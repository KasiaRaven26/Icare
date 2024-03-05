import styles from "./ClientMessageCard.module.css"

const clientMessageCard = ({ sender, message }) => {

const renderedDetails = () => {
  return (
    <div>
      <h2>From {sender}</h2>
      <p>{message}</p>
    </div>
  )
}


  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {renderedDetails()}
      </div>
    </div>
  );
};

export default clientMessageCard;
