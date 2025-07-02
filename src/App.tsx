import About from "./components/About";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Main from "./components/Main";
import Program from "./components/Program";
import Team from "./components/Team";
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
      <Feedback />
    </div>
  );
};

export default App;
