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
          <a href="/client/your-details"><h3>YOUR DETAILS</h3></a>
          <a href="/client/cover-letter"><h3>COVER LETTER</h3></a>
          <a href="/client/your-messages"><h3>YOUR MESSAGES</h3></a>
          <a href="/client/resume"><h3>RESUME</h3></a>

        </div>
      )}
    </div>
  );
};

export default ClientSideBar;
