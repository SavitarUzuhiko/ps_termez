import { FaChevronRight } from "react-icons/fa";

import { useState } from "react";
import categories from "../data/scategories";
import studentLifeData from "../data/slife";

const StudentLife = () => {
  const [cat, setCat] = useState("sport");

  return (
    <section className="slife">
      <div className="container">
        <h2 className="slife__title title-h2">Student Life</h2>
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
                  <c.icon />
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
