import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { programData, programCards } from "../data/program";

const Program = () => {
  return (
    <div className="program">
      <div className="container">
        <h2 className="program__title title-h2">{programData.title}</h2>
        <p className="program__lead">{programData.lead}</p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
            stopOnLastSlide: false,
          }}
          loop={true}
          centeredSlides={true}
          centerInsufficientSlides={true}
          grabCursor={true}
          allowTouchMove={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
          }}
          speed={1000}
          watchSlidesProgress={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
              effect: "slide",
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
              centeredSlides: false,
              effect: "slide",
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: false,
              effect: "slide",
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
          }}
          className="program__boxes"
        >
          {programCards.map((card) => (
            <SwiperSlide key={card.id} style={{ height: 'auto'}}>
              <article className="program__box" style={{ height: '100%' , width:'100%'}}>
                <h3 className="program__box-title">{card.title}</h3>
                <div className="program__content">
                  <span className="program__badge">{card.badge}</span>
                  <p className="program__text">{card.text}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Program;
