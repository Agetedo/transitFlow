import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { visionGallery } from "../DataBase/visionGallery";
import { visionShowing } from "../DataBase/visionShowing";
import "swiper/scss";
import "swiper/scss/effect-creative";
import "swiper/scss/autoplay";
import "..//styles/OurVision.scss";
const visionText = <>{"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition."}</>;

function VisionGallery() {
  const visionGalleryList = visionGallery.map(image => 
    <SwiperSlide key={image.id} className="vision-slide">
      <img src={image.imgSrc} alt={image.imageAlt} />
    </SwiperSlide>
  );

  return (
    <Swiper modules={[ EffectCreative, Autoplay ]} 
      id="visionGallery"
      slidesPerView={1} spaceBetween={0}
      loop={true} speed={1000}
      autoplay={{ 
        delay: 1500, 
        disableOnInteraction: false,
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
    >
      {visionGalleryList}
    </Swiper>
  );
}

function VisionShowing({ text }) {
  const visionList = visionShowing.map( vision => 
    <div key={vision.id} className="vision-showing">
      <img src={vision.imgSrc} alt={vision.imgAlt} />
      <section className="vision-showing__text">
        <h3>{vision.caption}</h3>
        <p>{vision.text}</p>
      </section>
    </div>
  );
  
  return(
    <div className="vision-showing__items">
      <p>{text}</p>
      <div className="vision__points">{visionList}</div>
    </div>
  );
}

function VisionList() {
  return(
    <div className="vision__items">
      <VisionGallery />
      <VisionShowing text={visionText}/>
    </div>
  );
}

export default function OurVision() {
  return (
    <Conteiner className={"vision"}>
      <TitleCenter
        caption={"Our Vision"} 
        title={"Our vision of service"}
      />
      <VisionList />
    </Conteiner>
  );
}