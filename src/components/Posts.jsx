import Post from "./Post";

function Posts() {
  return (
    <div className="posts-inner">
      <Post
        src="../img/car.jpg"
        title="Car at low price"
        description="A stranger sells a car at very low price only 2000$"
      />
      <Post
        src="../img/man.jpg"
        title="A man who reached a sky"
        description="A stranger reached a sky by plane"
      />
      <Post
        src="../img/car.jpg"
        title="The most "
        description="A stranger sells a car at very low price only 2000$"
      />
    </div>
  );
}

export default Posts;
