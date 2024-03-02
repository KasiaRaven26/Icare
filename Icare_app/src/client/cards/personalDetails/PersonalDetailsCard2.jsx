import AddressCard from "./AddressCard";
import ContactNumbersCard from "./ContactNumbersCard";
import ResumeCard from "./ResumeCard";
import TitleAndNameCard from "./TitleAndNameCard";

const PersonalDetailsCard2 = () => {
  return (
    <div>
      <TitleAndNameCard />
      <AddressCard />
      <ContactNumbersCard />
      <ResumeCard />
    </div>
  );
};

export default PersonalDetailsCard2;
