import { useState, useRef, useEffect } from "react";
import Conteiner from "./Conteiner.jsx";
import playButton from "/play-button.png";
import { servicesBenefitList } from "../DataBase/servicesBenefitList.js";
import "..//styles/ServiceDetails.scss";

function ServiceTitle({ iconSrc, title01 }) {
  return(
    <div className="service-title__items">
      <img src={iconSrc} alt="#" />
      <h3 className="title">{title01}</h3>
    </div>
  );
}
function ServiceText({ text01, text02 }) {
  return(
    <div className="service-text__items">
      <p className="text">{text01}</p>
      <p className="text">{text02}</p>
    </div>
  );
}

const itemList = servicesBenefitList.map(item => 
  <li key={item.id}>{item.text}</li>
);
function ServiceBenefit({ title02, text03, imgSrc02, imgAlt02 }) {
  return(
    <div className="service-benefit__items">
      <section className="service-benefit">
        <h3 className="service-benefit__title">{title02}</h3>
        <p className="service-benefit__text">{text03}</p>
        <ul className="service-benefit__list">{itemList}</ul>
      </section>
          
      <div className="service-benefit__image">
        <img src={imgSrc02} alt={imgAlt02} />
      </div>
    </div>
  );
}

function VideoPlayer({ src, isPlaying, onClick }) {
  const ref = useRef(null);
  
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  
  return (
    <div className="video-wrapper">
      <video ref={ref} src={src} loop playsInline 
        className="video" preload="none" poster="/video-poster.jpeg"
      />
      <button onClick={onClick} className="play-button">
        <img src={playButton} alt="#" /> {isPlaying ? "Pause" : "Play"}
      </button> 
    </div>
  );
}

function ServiceVideo({ title03, text04, text05 }) {
  return(
    <div className="service-video">
      <h3 className="title">{title03}</h3>
      <p className="text">{text04}</p>
      <p className="text">{text05}</p>
    </div>
  );
}

export default function ServiceDetails(
  { imgSrc01, imgAlt01, 
    iconSrc, title01, 
    text01, text02, 
    title02, text03, imgSrc02, imgAlt02,
    title03, text04, text05, src,
  }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Conteiner className={"service-details"}>
      <img src={imgSrc01} alt={imgAlt01} />
      <ServiceTitle 
        iconSrc={iconSrc}
        title01={title01}
      />
      <ServiceText 
        text01={text01}
        text02={text02}
      />
      <ServiceBenefit 
        title02={title02}
        text03={text03}
        imgSrc02={imgSrc02}
        imgAlt02={imgAlt02}
      />
      <ServiceVideo 
        title03={title03}
        text04={text04}
        text05={text05}
      />  
      <VideoPlayer isPlaying={isPlaying} src={src} 
        onClick={() => setIsPlaying(!isPlaying)}
      />
    </Conteiner>
  );
}