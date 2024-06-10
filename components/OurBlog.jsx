import { useState } from "react";
import { Link } from "react-router-dom";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { blogPosts } from "../DataBase/blogPosts";
import ButtonLight from "./ButtonLight.jsx";
import "..//styles/OurBlog.scss";

const blogPostsList = blogPosts.map(post => 
  <div key={post.id} className="blog-post">
    <div className="blog-post__image">
      <img src={post.imgSrc} alt={post.imgAlt} />
    </div>
          
    <div className="blog-post__content">
      <span className="blog-post__data">{post.postData}</span>
      <span className="blog-post__rubric">{post.rubric}</span>
      <Link to={post.linkTo} className="blog-title__link">
        <h4 className="title">{post.title}</h4>
      </Link>
      <Link to={post.linkTo} className="blog-text__link">
        <p className="text">{post.text}</p>
      </Link>
    </div>
  </div>
);

function BlogItems() {
  return(
    <div className="blog__items">{blogPostsList}</div>
  );
}

function MorePostButton({ buttonText, type, onClick }) {
  return(
    <div id="morePostButton">
      <ButtonLight 
        buttonText={buttonText}
        type={type}
        onClick={onClick}
      />
    </div>
  );
}

export default function OurBlog() {
  const [showMorePosts, setShowMorePosts] = useState(false);

  function handleMorePosts() {
    setShowMorePosts(!showMorePosts);
  }
  return (
    <Conteiner className={"blog"}>
      <TitleCenter 
        caption={"Our Blog"}
        title={"Our Latest News"}
      />
      <BlogItems />
      {showMorePosts && <BlogItems />}
      <MorePostButton 
        buttonText={showMorePosts ? "Hide Latest" : "Our Posts"} 
        type="button" 
        onClick={handleMorePosts}
      />
    </Conteiner>
  );
} 