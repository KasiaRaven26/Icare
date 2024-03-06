import styles from "./PersonalDetailsCard2.module.css";

const TitleAndNameCard = () => {
  
  const titleAndName = () => {
    return (
      <div>
       
        <h4>Title</h4>
        <h4>First name</h4>
        <h4>Middle name</h4>
        <h4>Last name</h4>
      </div>
    );
  };


  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {titleAndName()}
      </div>
    </div>
  );
};

export default TitleAndNameCard;
