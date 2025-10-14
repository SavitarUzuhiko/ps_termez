
import { PiArrowCircleRightThin } from "react-icons/pi";

const Slide = ({
  title,
  lead,
  link,
  linkText,
  image,
}: {
  title: string;
  lead: string;
  link: string;
  linkText: string;
  image: string;
}) => {
  return (
    <div className="slide">
      <div className="slide__content">
        <h2 className="slide__title">{title}</h2>
        <p className="slide__lead">{lead}</p>
        <a href={link} className="slide__link">
          {linkText}
          <PiArrowCircleRightThin className="slide__arrow" />
        </a>
      </div>
      <img src={image} alt="slide photo" className="slide__image" />
    </div>
  );
};

export default Slide;
