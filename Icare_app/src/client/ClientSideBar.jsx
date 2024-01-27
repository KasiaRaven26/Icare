import { GoChevronRight } from "react-icons/go";
import styles from "./ClientSideBar.module.css";

const ClientSideBar = ({ sideBarOpen }) => {
  return (
    // <div style={{display: "flex", justifyContent:"flex-end"}}>
    //   <GoChevronRight size={50} />
    // </div>
    <div
      className={sideBarOpen ? styles.containerOpen : styles.containerClosed}
    >
      {sideBarOpen && (
        <div className={styles.containerContent}>
          <a href="/client/your-details"><h3>Your details</h3></a>
          <a href="/"><h3>Cover letter</h3></a>
          <a href="/"><h3>Your messages</h3></a>
          <a href="/"><h3>Resume</h3></a>

        </div>
      )}
    </div>
  );
};

export default ClientSideBar;
