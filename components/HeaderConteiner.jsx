import "..//styles/HeaderConteiner.scss";

export default function HeaderConteiner({ children }) {
  return (
    <header className="header">
      <div className="conteiner">{children}</div>
    </header>
  )
}