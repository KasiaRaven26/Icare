import logo from "../components/I_care.jpg";
import styles from "./ClientHeader.module.css";
import { FaRegMessage } from "react-icons/fa6";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const ClientHeader = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.imageDiv}>
        <a href="/">
          <img className="logo" src={logo} alt="Logo" />{" "}
        </a>
      </div>
      <div className={styles.linkDiv}>
      <FaSearch style={{ margin: "8 40 0 0" }} size={50}/>
        <FaRegMessage style={{ margin: "8 40 0 0" }} size={50}></FaRegMessage>
        <RiAccountBoxLine size={60} />
      </div>
    </div>
  );
};

export default ClientHeader;
