import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="header-navigation navigation">
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-list__item">
              <Link to="/news">News</Link>
            </li>
            <li className="navigation-list__item">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
