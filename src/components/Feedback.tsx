import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import feedbacks from "../data/feedbacks";

const Feedback = () => {
  return (
    <div className="container">
      <div className="feedbacks__wrapper">
        <h2 className="feedbacks__title">Feedback</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
          }}
        >
          {feedbacks.map((f) => (
            <SwiperSlide>
              <div className="feedback__outer">
                <article className="feedback">
                  <h3 className="feedback__title">{f.name}</h3>
                  <p className="feedback__text">{f.comment}</p>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
