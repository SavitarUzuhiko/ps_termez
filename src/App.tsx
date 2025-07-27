import About from "./components/About";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Program from "./components/Program";
import StudentLife from "./components/StudentLife";
import Team from "./components/Team";
import "./css/normalize.css";
import "./main.scss";

const App = () => {
  return (
    <div id="root">
      <Header />
      <hr className="rule" />
      <Main />
      <div className="container">
        <About />
      </div>
      <Program />
      <Team />
      <StudentLife />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
