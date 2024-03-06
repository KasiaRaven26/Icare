import styles from "./PersonalDetailsCard2.module.css";

const ResumeCard = () => {


  const resume = () => {
    return (
      <div>
        <h2>Resume</h2>
        <p>
          
        </p>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {resume()}
      </div>
    </div>
  );
};

export default ResumeCard;
