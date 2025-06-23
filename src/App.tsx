import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Program from "./components/Program";
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
    </div>
  );
};

export default App;
