import { Link } from "react-router-dom";
import Conteiner from "./Conteiner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import { clients } from "../DataBase/clients";
import "swiper/scss";
import "swiper/scss/autoplay";
import 'swiper/scss/free-mode';
import "swiper/scss/keyboard";
import "..//styles/ClientsGallery.scss";

export default function ClientsGallery() {
  
  const clientsList = clients.map(client => 
    <SwiperSlide key={client.id} className="client-slide">
      <Link to={client.linkTo} rel="noopener" target="_blank" className="client-link"> 
        <img className="client-image" src={client.imgSrc} alt="#" />
        <div className="client__logo">
          <img src={client.hoverLogo} alt="#" />
        </div>
      </Link>
    </SwiperSlide>
  );

  return (
    <Conteiner className={"clients"}>
      <Swiper modules={[ Autoplay, FreeMode, Keyboard, ]} 
        slidesPerView={4} spaceBetween={9}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        freeMode={{
          sticky: true,
        }}
        loop={true}
        keyboard={{ enabled: true, onlyInViewport: false }}
        className="clients__gallery"
        breakpoints={{
          1025: {
            slidesPerView: 4, 
          },
          1024: {
            slidesPerView: 3.2, 
          },
          708: {
            slidesPerView: 3.2, 
          },
          707: {
            slidesPerView: 2.2, 
          },
          448: {
            slidesPerView: 2.2, 
          },
          447: {
            slidesPerView: 1.4, 
          },
          319: {
            slidesPerView: 1.4,
          },
        }}
      >
        {clientsList}
      </Swiper>
    </Conteiner>
  );
}