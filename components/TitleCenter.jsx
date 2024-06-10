import "..//styles/TitleCenter.scss";

export default function TitleCenter({ caption, title, style }) {
  return (
    <div className="title__center" style={style}>
      <h3 className="caption">{caption}</h3>
      <h2 className="title">{title}</h2>
    </div>
  );
} 