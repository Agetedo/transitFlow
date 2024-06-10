import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Conteiner from "./Conteiner";
import { overviewTabs } from "../DataBase/overviewTabs";
import TitleCenter from "./TitleCenter";
import "..//styles/AboutUs.scss";
const ovierviewCaption = <>{"Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi.Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi.Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi."}</>;

function OvierviewCaption({ caption }) {
  return(
    <p className="ovierview-caption">{caption}</p>
  );
}

export default function AboutUs() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabList = overviewTabs.map(tab => 
    <Tab key={tab.id}>{tab.buttonText}</Tab>
  );
  const tabPanelList = overviewTabs.map(panel => 
    <TabPanel key={panel.id}>
      <img src={panel.imageSrc} alt={panel.imageAlt} />
      
      <div className="tab-panel__content">
        <p className="text">{panel.text}</p>
        <Link to={panel.linkTo} className="tab-panel__link">
          {panel.buttonLinkText}
        </Link> 
      </div>
    </TabPanel>
  );

  return (
    <Conteiner className={"about-us"} >
      <TitleCenter
        caption={"About Us"}
        title={"Our Company Overview"}
      />
      <OvierviewCaption caption={ovierviewCaption}/>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>{tabList}</TabList>
        {tabPanelList}
      </Tabs>
    </Conteiner>
  );
} 