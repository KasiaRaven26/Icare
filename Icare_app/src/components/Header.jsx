import logo from "./I_care.jpg";
import "./Header.css";

export function Header() {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />

      <h3>Icare</h3>
    </div>
  );
}
