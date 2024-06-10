import ConteinerBg from "./ConteinerBg.jsx";
import "..//styles/Heading.scss";

export default function Heading({ className, imageUrl, title, caption }) {
  return (
    <ConteinerBg className={className} imageUrl={imageUrl}>
      <h3 className="heading__caption">{caption}</h3>
      <h1 className="heading__title">{title}</h1>
    </ConteinerBg>
  );
} 