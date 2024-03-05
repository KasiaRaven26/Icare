import { GoChevronRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
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
          <Link to="/client/your-details"><h3>YOUR DETAILS</h3></Link>
          <Link to="/client/cover-letter"><h3>FIND CAREGIVERS </h3></Link>
          <Link to="/client/messages"><h3>YOUR MESSAGES</h3></Link>
          <Link to="/client/resume"><h3>RESUME</h3></Link>

        </div>
      )}
    </div>
  );
};

export default ClientSideBar;
