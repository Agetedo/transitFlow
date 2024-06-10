import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { liecenses } from "../DataBase/liecenses";
import "..//styles/AssetsLiecenses.scss";

export default function AssetsLiecenses() {

  const liecensesList = liecenses.map(liecense => 
    <div className="assets-liecense__item" key={liecense.id}>
      <h4 className="caption">{liecense.caption}</h4>
      <p className="text">{liecense.text}</p>
    </div>
  );

  return (
    <Conteiner className={"assets-liecenses"}>
      <TitleCenter
        caption={"Liecensing"}
        title={"By downloading Transit Flow assets you are being granted a license to use the files for specific uses under certain conditions"}
      />
      {liecensesList}
    </Conteiner>
  );
}