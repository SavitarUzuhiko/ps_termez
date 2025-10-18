import { teamData, filter } from '../data/teamData';

const Team = () => {
  return (
    <section className='team'>
      <div className='container'>
        <div className='team__textbox'>
          <h2 className='team__title title-h2'>Meet our team</h2>
          <p className='team__subtitle'>
            Termez Presidential School's team is a diverse group of talented
            teachers and professional administrators.
          </p>
          <div className='team__box'>
            {filter.map((teacher) => (
              <button key={teacher} className='team__more'>
                {teacher}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='members'>
        <div className='members__inner'>
          {teamData.map((m) => (
            <article key={m.name + m.role} className='member'>
              <img src={m.image} alt='team member' className='member__image' />
              <div className='member__box'>
                <h3 className='member__name'>{m.name}</h3>
                <p className='member__info'>{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
