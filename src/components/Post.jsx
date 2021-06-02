import "../styles/Post.css";

function Post(props) {
  return (
    <div className="post">
      <img src={props.src} alt="" className="post__image" />
      <h5 className="post__title">{props.title}</h5>
      <p className="post__description">{props.description}</p>
    </div>
  );
}

export default Post;
