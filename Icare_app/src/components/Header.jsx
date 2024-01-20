import logo from "./I_care.jpg";
import "./Header.css";
import { FaRegMessage } from "react-icons/fa6";
import { RiAccountBoxLine } from "react-icons/ri";

export function Header() {
  return (
    <div style={{ position: "relative" }}>
      <div className="image-div">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="link-div">
        <FaRegMessage style={{"margin" : "8 40 0 0"}} size={50}></FaRegMessage>
        <RiAccountBoxLine size={60}/>
      </div>
    </div>
  );
}
