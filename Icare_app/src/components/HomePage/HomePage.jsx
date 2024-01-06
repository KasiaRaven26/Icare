import "./HomePage.css";
import Content from "../ContetItems/Content";
import { Header } from "../Header";
import { Footer } from "../Footer";

function HomePage() {
  return (
    <div>
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
