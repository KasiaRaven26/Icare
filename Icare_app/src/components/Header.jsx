import logo from "./I_care.jpg";
import "./Header.css";


export function Header() {
  const handleClick = () => {console.log("Kasia loves Adam ")} 
  return (
    <div style={{ position: "relative" }}>
      <div className="image-div">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="link-div">
        <a href="./login">login</a>
        <div onClick={handleClick} ></div>
      </div>
    </div>
  );
}
