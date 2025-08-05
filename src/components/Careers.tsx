import imgSrc from "../assets/careers.jpg";

const Careers = () => {
  return (
    <div className="container">
      <div className="careers">
        <div className="careers__content">
          <h2 className="careers__title title-h2">Careers</h2>
          <p className="careers__text">
            We are constantly looking for motivated and passionate academic and
            administrative professionals to join our team and help us achieve
            our mission.
          </p>
          <a href="#" className="careers__more">
            Vacancies
          </a>
        </div>
        <img src={imgSrc} alt="" className="careers__image" />
      </div>
    </div>
  );
};

export default Careers;
