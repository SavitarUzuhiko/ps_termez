import { FcIdea } from "react-icons/fc";
import { GiSoccerBall } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { RiCalendarEventFill } from "react-icons/ri";
import { IoLibrarySharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import categories from "../data/scategories";
import studentLifeData from "../data/slife";
import { useState, type JSX } from "react";

const StudentLife = () => {
  const [cat, setCat] = useState("creative");

  const iconMap: { [key: string]: JSX.Element } = {
    FcIdea: <FcIdea />,
    GiSoccerBall: <GiSoccerBall />,
    GiCommercialAirplane: <GiCommercialAirplane />,
    IoColorPaletteSharp: <IoColorPaletteSharp />,
    RiCalendarEventFill: <RiCalendarEventFill />,
    IoLibrarySharp: <IoLibrarySharp />,
    FaChevronRight: <FaChevronRight />,
  };

  return (
    <section className="slife">
      <div className="container">
        <h2 className="slife__title">Student Life</h2>
      </div>
      <div className="slife__flex container">
        <div className="slife__categories container">
          {categories.map((c) => (
            <article
              key={c.slug}
              onClick={() => {
                setCat(c.slug);
              }}
              className={`slife__category ${c.slug === cat ? "active" : ""}`}
            >
              <div className="slife__iconbox">
                <span className={`slife__icon slife__icon--${c.slug}`}>
                  {iconMap[c.icon]}
                </span>
              </div>
              <h3 className="slife__category-name">{c.name}</h3>
            </article>
          ))}
        </div>
        <div className="slife__display">
          <img
            src={studentLifeData[cat as keyof typeof studentLifeData].img}
            alt=""
            className="slife__image"
          />
          <p className="slife__text">
            {studentLifeData[cat as keyof typeof studentLifeData].text}
          </p>
          <a href="#" className="slide__link slife__link">
            More <FaChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
