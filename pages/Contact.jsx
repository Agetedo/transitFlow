import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import ClientsGallery from "../components/ClientsGallery.jsx";
import Faq from "../components/Faq.jsx";

export default function Contact() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/contact-heading-bg.jpeg"}
        caption={"Contact"}
        title={"Contact Us"}
      />
      <ContactForm />
      <ClientsGallery />
      <Faq />
    </>
  );
}