import { useEffect, useRef, useState } from 'react';
import { filter, teamData } from '../data/teamData';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All teachers');
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  const filteredTeam =
    activeFilter === 'All teachers'
      ? teamData
      : teamData.filter((member) => member.role === activeFilter);

  const handleFilterChange = (filterValue: string) => {
    setActiveFilter(filterValue);
  };

  return (
    <section className='team'>
      <div className='container'>
        <div className='team__textbox'>
          <h2 className='team__title title-h2'>Meet Our Amazing Team</h2>
          <p className='team__subtitle'>
            Termez Presidential School's team is a diverse group of talented
            educators and professional administrators dedicated to providing
            exceptional education and nurturing future leaders.
          </p>
          <div className='team__box'>
            {filter.map((teacher) => (
              <button
                key={teacher}
                className={`team__more ${
                  activeFilter === teacher ? 'team__more--active' : ''
                }`}
                onClick={() => handleFilterChange(teacher)}
              >
                {teacher}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='members'>
        <div className='members__inner' ref={scrollRef}>
          {filteredTeam.map((m, index) => (
            <article
              key={`${m.name}-${m.role}-${index}`}
              className={`member ${isMobile ? 'member--no-hover' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={m.image}
                alt={`${m.name} - ${m.role}`}
                className='member__image'
              />
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
