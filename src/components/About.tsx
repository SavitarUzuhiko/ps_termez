import { aboutData } from "../data/about";

const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">{aboutData.title}</h1>
      <p className="about__lead">
        {aboutData.text}
      </p>
      <div className="about__pics">
        {aboutData.pics.map((pic) => (
          <img src={pic.src} alt={pic.alt} className="about__pic" key={pic.src} />
        ))}
      </div>
    </section>
  );
};

export default About;
