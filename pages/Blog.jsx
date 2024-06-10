import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import OurBlog from "../components/OurBlog.jsx";

export default function Blog() {
  return (
    <>
      <Header />
      <Heading 
        className={"heading"} 
        imageUrl={"/blog-heading-bg.jpeg"}
        caption={"Blog"}
        title={"Our Latest News"}
      />
      <OurBlog />
    </>
  );
}