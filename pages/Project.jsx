import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import ProjectMenu from "../components/ProjectMenu.jsx";
import OurVision from "../components/OurVision.jsx";
import WhyUsIndicators from "../components/WhyUsIndicators.jsx";

export default function Project() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/project-heading-bg.jpeg"}
        caption={"Gallery"}
        title={"Our Project"}
      />
      <ProjectMenu />
      <OurVision />
      <WhyUsIndicators />
    </>
  );
}