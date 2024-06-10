import Header from "../components/Header.jsx";
import HomeHeading from "../components/HomeHeading.jsx";
import homePageBanner01 from "/home-page-banner01.jpeg";
import homePageBanner02 from "/home-page-banner02.jpeg";
import WeDo from "../components/WeDo.jsx";
import HomeBanner from "../components/HomeBanner.jsx";
import WhyUs from "../components/WhyUs.jsx";
import WhyUsIndicators from "../components/WhyUsIndicators.jsx";
import Transporting from "../components/Transporting.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import TeamMembers from "../components/TeamMembers.jsx";
import ContactForm from "../components/ContactForm.jsx";
import ClientsGallery from "../components/ClientsGallery.jsx";
import LatestPosts from "../components/LatestPosts.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeading 
        className={"heading__home"} 
        imageUrl={"/home-heading-bg.jpeg"}
        caption={"Logistics & Supply Chain Solutions"}
        title={"Your Gateway to any Destination in the World"}
        text={"In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus."}
        buttonText={"Explore More"}
      /> 
      <WeDo className={"we-do"} />
      <HomeBanner 
        imgSrc={homePageBanner01}
        imgAlt={"Cargo transport containers"}
      />
      <WhyUs className={"why-us"} />
      <WhyUsIndicators />
      <Transporting />
      <Testimonials />
      <WhyChoose />
      <TeamMembers />
      <ContactForm />
      <ClientsGallery />
      <LatestPosts />
      <HomeBanner 
        imgSrc={homePageBanner02}
        imgAlt={"Cargo sea port"}
      />
    </>
  );
} 