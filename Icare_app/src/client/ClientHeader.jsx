import logo from "../components/I_care.jpg";
import styles from "./ClientHeader.module.css";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import MessageComponent from "../components/messageComponent/MessageComponent";
import { useSelector } from "react-redux";

const ClientHeader = () => {


  const user = useSelector((state) => {
    return state.loggedInUser[0].name;
  });

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.imageDiv}>
        <a href="/">
          <img className="logo" src={logo} alt="Logo" />{" "}
        </a>
      </div>
      <div className={styles.linkDiv}>
        <h2>Hi!{user}</h2>
        <FaSearch style={{ margin: "8 40 0 0" }} size={40} />
        <MessageComponent />
        <RiAccountBoxLine size={50} />
      </div>
    </div>
  );
};

export default ClientHeader;
