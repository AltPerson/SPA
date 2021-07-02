import Post from "./Post";

function Posts() {
  return (
    <div className="posts-inner">
      <Post
        src="../img/car.jpg"
        title="Car at low price"
        description="The stranger sells a car at very low price only 2000$"
      />
      <Post
        src="../img/man.jpg"
        title="A man who reached a sky"
        description="The stranger reached a sky in a very interesting way"
      />
      <Post
        src="../img/people.jpg"
        title="Why Don't Young People Read the News?"
        description="Kids Are Too Busy With Facebook and Texting, Author Says"
      />
    </div>
  );
}

export default Posts;
