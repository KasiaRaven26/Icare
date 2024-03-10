import AddressCard from "./AddressCard";
import styles from "./PersonalDetailsCard2.module.css"
import ContactNumbersCard from "./ContactNumbersCard";
import ResumeCard from "./ResumeCard";
import TitleAndNameCard from "./TitleAndNameCard";

const PersonalDetailsCard2 = () => {
  return (
    <div className={styles.container}>
      <TitleAndNameCard />
      <AddressCard />
      <ContactNumbersCard />
      <ResumeCard />
    </div>
  );
};

export default PersonalDetailsCard2;
