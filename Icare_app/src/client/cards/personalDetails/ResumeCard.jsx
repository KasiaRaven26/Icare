import styles from "./PersonalDetailsCard2.module.css";

const ResumeCard = () => {


  const resume = () => {
    return (
      <div>
        <h2>Resume</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mi
          eros. Donec eu neque nec nunc vehicula hendrerit eu a quam. Sed nec
          turpis et tellus ornare facilisis. Aenean nec nibh et odio ornare
          tristique sit amet non orci.
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
