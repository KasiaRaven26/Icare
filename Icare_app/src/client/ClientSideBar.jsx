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
          <Link to="/client"><h3>Home</h3></Link>
          <Link to="/client/your-details"><h3>Your Details</h3></Link>
          <Link to="/client/cover-letter"><h3>Find Caregivers</h3></Link>
          <Link to="/client/messages"><h3>Your Messages</h3></Link>
          <Link to="/client/resume"><h3>Resume</h3></Link>

        </div>
      )}
    </div>
  );
};

export default ClientSideBar;
