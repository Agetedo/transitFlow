import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { goodnessGallery } from "../DataBase/goodnessGallery";
import { goodnessShowing } from "../DataBase/goodnessShowing";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/autoplay";
import "..//styles/Goodness.scss";

function GoodnessGallery() {
  const goodnessGalleryList = goodnessGallery.map(image => 
    <SwiperSlide key={image.id} className="goodness-slide">
      <img className="goodness-image" src={image.imgSrc} alt={image.imageAlt} />
    </SwiperSlide>
  );

  return (
    <Swiper modules={[ EffectFade, Autoplay, ]} 
      id="goodnessGallery"
      slidesPerView={1} spaceBetween={0}
      effect={"fade"}
      loop={true} speed={1000}
      autoplay={{ 
        delay: 1500, 
        disableOnInteraction: false,
      }}
    >
      {goodnessGalleryList}
    </Swiper>
  );
}

const goodnessList = goodnessShowing.map( item => 
  <div key={item.id} className="goodness-showing">
    <img src={item.imgSrc} alt={item.imgAlt} />
    <section className="goodness-showing__text">
      <h3>{item.caption}</h3>
      <p>{item.text}</p>
    </section>
  </div>
);
function GoodnessList() {
  return(
    <div className="goodness__items">
      <GoodnessGallery />
      <div className="goodness-list">{goodnessList}</div>
    </div>
  );
}

export default function Goodness() {
  return (
    <Conteiner className={"goodness"}>
      <TitleCenter
        caption={"Our Goodness"} 
        title={"How We Works"}
      />
      <GoodnessList />
    </Conteiner>
  );
}