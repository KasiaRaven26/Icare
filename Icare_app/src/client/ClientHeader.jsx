import logo from "../components/I_care.jpg";
import styles from "./ClientHeader.module.css";
import { RiAccountBoxLine } from "react-icons/ri";
import MessageComponent from "../components/messageComponent/MessageComponent";
import { useSelector } from "react-redux";
import { SearchBar } from "../components/searchBar/SearchBar";


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
      < SearchBar />
        <h2 className={styles.username}>Hi! {user}</h2>
      
       <div className={styles.messageicon}> <MessageComponent /></div>
        <RiAccountBoxLine size={50} />
        
      </div>
      
    </div>
  );
};

export default ClientHeader;
