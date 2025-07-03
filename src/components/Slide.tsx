import sliderImageSource from "../assets/slider-photo.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

const Slide = () => {
  return (
    <div className="slide">
      <div className="slide__content">
        <h2 className="slide__title">Slide title</h2>
        <p className="slide__lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          laudantium.
        </p>
        <a href="#" className="slide__link">
          More <BsArrowRightCircle className="slide__link-icon" />
        </a>
      </div>
      <img src={sliderImageSource} alt="slide photo" className="slide__image" />
    </div>
  );
};

export default Slide;
