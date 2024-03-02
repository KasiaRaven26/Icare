import styles from "./PersonalDetailsCard2.module.css";

const ContactNumbersCard = () => {
 
  const contactNumber = () => {
    return (
      <div>
        <h2>Contact numbers</h2>
        <h4>Contact number 1</h4>
        <h4>Contact number 2</h4>
        <h4>Contact number 3</h4>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {contactNumber()}
      </div>
    </div>
  );
};

export default ContactNumbersCard;
