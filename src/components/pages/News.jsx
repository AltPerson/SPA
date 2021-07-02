import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Posts from "../../components/Posts";
import "../../styles/News.css";

function News() {
  return (
    <div className="news">
      <Header className="header" />
      <div className="news-inner">
        <Posts className="header" />
      </div>
      <Footer className="footer" />
    </div>
  );
}
export default News;
