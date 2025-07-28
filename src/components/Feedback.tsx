import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import feedbacks from "../data/feedbacks";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

function MyCustomPrevButton({ swiper }: { swiper: any }) {
  return (
    <button
      onClick={() => swiper?.slidePrev()}
      className="feedbacks__button feedbacks__button--prev"
    >
      <FaArrowLeft />
    </button>
  );
}

function MyCustomNextButton({ swiper }: { swiper: any }) {
  return (
    <button
      onClick={() => swiper?.slideNext()}
      className="feedbacks__button feedbacks__button--next"
    >
      <FaArrowRight />
    </button>
  );
}

const Feedback = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="container">
      <div className="feedbacks__wrapper">
        <div className="feedbacks__header">
          <h2 className="feedbacks__title">Feedback</h2>
          <div className="feedbacks__buttons">
            <MyCustomPrevButton swiper={swiperInstance} />
            <MyCustomNextButton swiper={swiperInstance} />
          </div>
        </div>

        <Swiper
          onSwiper={setSwiperInstance}
          slidesPerView={3}
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
          {feedbacks.map((f, i) => (
            <SwiperSlide key={f.name + i}>
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
