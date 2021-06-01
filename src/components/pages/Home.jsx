import "../../styles/Home.css";
import Header from "../Header";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-inner">
        <div className="home-inner__title">Welcome to Home Page</div>
        <div className="home-inner__info">The place where it all begins</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
