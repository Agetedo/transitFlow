import "..//styles/ConteinerBg.scss";

export default function ConteinerBg({ children, className, imageUrl }) {
  return (
    <div className={className} style={{ backgroundImage: `url("${imageUrl}")` }}>
      <div className="conteiner">{children}</div>
    </div>
  );
}