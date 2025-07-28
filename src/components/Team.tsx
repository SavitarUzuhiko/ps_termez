import teamData from "../data/teamData";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="team__textbox">
          <h2 className="team__title">Meet our team</h2>
          <p className="team__subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ab
            laudantium quae quos perspiciatis iure nesciunt quod.
          </p>
          <a href="#" className="team__more">
            All teachers
          </a>
        </div>
      </div>
      <div className="members">
        <div className="members__inner">
          {teamData.map((m) => (
            <article className="member">
              <img src={m.image} alt="team member" className="member__image" />
              <div className="member__box">
                <h3 className="member__name">{m.name}</h3>
                <p className="member__info">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
