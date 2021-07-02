import Header from "../Header";
import Footer from "../Footer";
import logoImage from "../../img/profile-logo.jpg";
import "../../styles/Profile.css";
import { setAuth } from "../../reducers/authReducer";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  return (
    <div className="profile">
      <Header />
      <div className="profile-inner">
        <div className="profile-content">
          <img src={logoImage} alt="" className="profile__img" />
          <div className="profile-description">
            <div className="profile-description__name">Alex</div>
            <div className="profile-description__surname">Moran</div>
            <div className="profile-description__info">Quarterback at BMS</div>
          </div>
        </div>
        <button
          onClick={() => dispatch(setAuth(false))}
          className="profile-quite"
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
