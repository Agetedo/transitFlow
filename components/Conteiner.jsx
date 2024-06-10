import "..//styles/Conteiner.scss";

export default function Conteiner({ children, className }) {
  return (
    <div className={className}>
      <div className="conteiner">{children}</div>
    </div>
  );
}