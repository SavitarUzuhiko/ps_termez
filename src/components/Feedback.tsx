import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { IoIosStar } from "react-icons/io";

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
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Lorem, ipsum.</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, id? Doloremque explicabo perferendis iure velit non
                  ad praesentium nostrum commodi in dignissimos? Qui, fugiat.
                </p>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Tempore, cum?</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Et commodi assumenda expedita obcaecati, accusantium ipsa
                  perferendis odio ea sunt? Dignissimos, sit. Libero a quo
                  dolore minus vitae quibusdam eius fuga qui hic.
                </p>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Minima, vitae.</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Minus a laudantium eum nemo, sunt delectus necessitatibus
                  dicta aspernatur eveniet. Delectus, ipsa, nihil illo natus
                  voluptatem accusantium voluptatibus at sequi repellendus,
                  optio recusandae!
                </p>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Aperiam, officia!</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Maxime animi facere voluptatem. Voluptatum architecto vero
                  voluptate molestias rem cupiditate sequi iure blanditiis
                  accusamus facere tempore aperiam voluptatibus, sint in ipsum
                  accusantium? Explicabo!
                </p>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Lorem, ipsum.</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, id? Doloremque explicabo perferendis iure velit non
                  ad praesentium nostrum commodi in dignissimos? Qui, fugiat.
                </p>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Tempore, cum?</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Et commodi assumenda expedita obcaecati, accusantium ipsa
                  perferendis odio ea sunt? Dignissimos, sit. Libero a quo
                  dolore minus vitae quibusdam eius fuga qui hic.
                </p>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedback__outer">
              <article className="feedback">
                <h3 className="feedback__title">Minima, vitae.</h3>
                <div className="feedback__rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="feedback__text">
                  Minus a laudantium eum nemo, sunt delectus necessitatibus
                  dicta aspernatur eveniet. Delectus, ipsa, nihil illo natus
                  voluptatem accusantium voluptatibus at sequi repellendus,
                  optio recusandae!
                </p>
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
