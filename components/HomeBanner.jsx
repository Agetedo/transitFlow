import "..//styles/HomeBanner.scss";

export default function HomeBanner({ imgSrc, imgAlt }) {
  return ( 
    <div className="home-page__banner">
      <img src={imgSrc} alt={imgAlt} />
    </div> 
  );
} 