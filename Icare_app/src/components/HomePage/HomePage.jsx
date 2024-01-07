import "./HomePage.css";
import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";
import carer from "../../components/ContetItems/carer.jpg"

function HomePage() {
  const myStyle = {
    backgroundImage:
    `url(${carer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};
  return (
    <div style={myStyle} >
      <div className="Header">
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
