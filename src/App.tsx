import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Program from "./components/Program";
import StudentLife from "./components/StudentLife";
import Team from "./components/Team";
import "./css/normalize.css";
import "./main.scss";
import ScrollToTop from "./components/ScrollToTop";

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
      {/* <Careers /> */}
      {/* <Feedback /> */}
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default App;
