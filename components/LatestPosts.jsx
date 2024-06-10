import { Link } from "react-router-dom";
import Conteiner from "./Conteiner";
import TitleCenter from "./TitleCenter";
import { blogPosts } from "../DataBase/blogPosts";
import PathConstants from "../routes/pathConstants";
import "..//styles/OurBlog.scss";
import "..//styles/LatestPosts.scss";

const latestData = ["25 March","28 March", "30 March"];
const latest = blogPosts.filter(data =>
  latestData.some(i => data.postData.includes(i))
);

const latestPostsList = latest.map(post => 
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
    <div className="blog__items">{latestPostsList}</div>
  );
}

function LatestPostsButton({ buttonText }) {
    return(
        <div className="latest-posts__button">
            <Link to={PathConstants.BLOGPAGE} className="link">
              {buttonText}
            </Link> 
        </div>
    );
}

export default function LatestPosts() {
  return (
    <Conteiner className={"latest-posts"}>
      <TitleCenter 
        caption={"Our Blog"}
        title={"Our Latest News"}
      />
      <BlogItems />
      <LatestPostsButton buttonText={"More Blog"}/>
    </Conteiner>
  );
} 