import source from "../assets/teacher_avatar.jpg";

const Team = () => {
  return (
    <section className="team">
        <div className="container">
        <div className="team__textbox">
            <h2 className="team__title">Meet our team</h2>
            <p className="team__subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ab laudantium quae quos perspiciatis iure nesciunt quod.</p>
            <a href="#" className="team__more">All teachers</a>
        </div>
        </div>
        <div className="members">
            <div className="members__inner">
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
                <article className="member">
                    <img src={source} alt="team member" className="member__image" />
                    <h3 className="member__name">Member name</h3>
                    <p className="member__info">Lorem ipsum dolor</p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Team