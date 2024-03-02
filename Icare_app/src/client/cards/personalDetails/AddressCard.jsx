import styles from "./PersonalDetailsCard2.module.css";

const AddressCard = () => {

  const address = () => {
    return (
      <div>
        <h2>Address</h2>
        <h4>House/apartment number</h4>
        <h4>First line</h4>
        <h4>Second line</h4>
        <h4>City</h4>
        <h4>Postcode</h4>
        <h4>Country</h4>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {address()}
      </div>
    </div>
  );
};

export default AddressCard;
