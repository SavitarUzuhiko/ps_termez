import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Main from "./components/Main";
import "./main.scss";

const App = () => {
  return (
    <div id="root">
      <Header />
      <hr className="rule" />
      <Main />
    </div>
  );
};

export default App;
