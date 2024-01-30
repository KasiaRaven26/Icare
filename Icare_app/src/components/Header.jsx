import logo from "./I_care.jpg";
import "./Header.css";

export function Header() {
  return (
    <div style={{ position: "relative" }}>
      <div className="image-div">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="link-div">
        <a href="./client">login</a>
      </div>
    </div>
  );
}
