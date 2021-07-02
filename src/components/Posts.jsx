import Post from "./Post";
import carImg from "../img/car.jpg";
import manImg from "../img/man.jpg";
import peopleImg from "../img/people.jpg";

function Posts() {
  return (
    <div className="posts-inner">
      <Post
        src={carImg}
        title="Car at low price"
        description="The stranger sells a car at very low price only 2000$"
      />
      <Post
        src={manImg}
        title="A man who reached a sky"
        description="The stranger reached a sky in a very interesting way"
      />
      <Post
        src={peopleImg}
        title="Why Don't Young People Read the News?"
        description="Kids Are Too Busy With Facebook and Texting, Author Says"
      />
    </div>
  );
}

export default Posts;
