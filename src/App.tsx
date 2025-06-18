import Carousel from "./components/Carousel";
import Header from "./components/Header";
import "./main.scss";

const App = () => {
  return (
    <div id="root">
      <Header />
      <hr className="rule" />
      <div className="container">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
