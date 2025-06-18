import Carousel from "./Carousel";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__slider">
          <Carousel />
        </div>
        <ul className="main__list">
          <li className="main__item">
            <a href="#" className="main__link">
              <i className="main__icon fa-solid fa-clipboard-list"></i>
              Trial day
            </a>
          </li>
          <li className="main__item">
            <a href="#" className="main__link">
              <i className="main__icon fa-solid fa-calendar-check"></i>
              Open day
            </a>
          </li>
          <li className="main__item">
            <a href="#" className="main__link">
              <i className="main__icon fa-solid fa-clipboard-user"></i>
              Our team
            </a>
          </li>
          <li className="main__item">
            <a href="#" className="main__link">
              <i className="main__icon fa-solid fa-file-invoice-dollar"></i>
              Chances
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
