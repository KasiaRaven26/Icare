import styles from "./PersonalDetailsCard2.module.css";

const ContactNumbersCard = () => {
 
  const contactNumber = () => {
    return (
      <div>
        <h2>Contact</h2>
        <h4>Phone number</h4>
      
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
