import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Posts from "../../components/Posts";
import "../../styles/News.css";

function News() {
  return (
    <div className="news">
      <Header />
      <div className="news-inner">
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
export default News;
