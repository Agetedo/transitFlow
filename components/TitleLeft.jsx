import "..//styles/TitleLeft.scss";

export default function TitleLeft({ caption, title }) {
  return (
    <div className="title__left">
      <h3 className="caption">{caption}</h3>
      <h2 className="title">{title}</h2>
    </div>
  );
} 