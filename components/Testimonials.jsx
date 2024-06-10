import Conteiner from "./Conteiner";
import TitleLeft from "./TitleLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import buttonNext from "/testimonials-arrow-button-next.png";
import buttonPrev from "/testimonials-arrow-button-prev.png";
import { testimonials } from "../DataBase/testimonials";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/keyboard";
import "..//styles/Testimonials.scss";

function TestimonialsNavigation() {
    return(
        <div className="testimonials__navigation">
            <div className="button-prev">
              <img src={buttonPrev} alt="#" />
            </div>
            <div className="button-next">
              <img src={buttonNext} alt="#" />
            </div>
        </div> 
    );
}
function TestimonialsCaption() {
    return(
        <div className="testimonials__caption">
            <TitleLeft 
              caption={"Testimonials"}
              title={"What Our Customer Say"}
            />
            <TestimonialsNavigation />
        </div> 
    );
}
const testimonialsList = testimonials.map(review => 
  <SwiperSlide key={review.id} 
    className="testimonial-slide" 
    style={{backgroundColor: review.color}}
  >
    <div className="testimonial"> 
      <section className="testimonial__caption">
        <img className="image" src={review.imageSrc} alt="#" />
        <div className="user">
          <p className="user__name">{review.userName}</p>
          <p className="user__position">{review.userPosition}</p>
        </div>
      </section>
      <img className="icon" src={review.iconSrc} alt="#" />
    </div>
    <p className="testimonial-slide__text">{review.text}</p>
    <img className="testimonial-slide__rating" src={review.starRating} alt="#" />
  </SwiperSlide>
);

export default function Testimonials() {
  return (
    <Conteiner className={"testimonials"}>
      <TestimonialsCaption />
            
        <Swiper modules={[ Navigation, Keyboard, ]} 
          slidesPerView={2} spaceBetween={0}
          autoHeight={true}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          loop={true} 
          keyboard={{ enabled: true, onlyInViewport: false }}
          className="testimonials__gallery"
          breakpoints={{
            769: {
              slidesPerView: 2, 
            },
            319: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonialsList}
        </Swiper>
    </Conteiner>
  );
}