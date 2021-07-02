import "../../styles/Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../reducers/authReducer.js";

function registerFunc(login, password, setShowCredits) {
  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
  document.location.reload();
  setShowCredits(true);
  setTimeout(() => {
    setShowCredits(false);
  }, 5000);
}

function checkAuth(
  login,
  password,
  dispatch,
  setAuthError,
  setLogin,
  setPassword
) {
  if (
    login === localStorage.getItem("login") &&
    password === localStorage.getItem("password")
  ) {
    dispatch(setAuth(true));
  } else {
    setAuthError(true);
    setTimeout(() => {
      setLogin("");
      setPassword("");
      setAuthError(false);
    }, 2000);
  }
}

function Login() {
  const [login, setLogin] = useState("");
  const [authError, setAuthError] = useState(false);
  const [password, setPassword] = useState("");
  const [showCredits, setShowCredits] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="login">
      <div className="login-container">
        <Link to="/">Back to Home</Link>
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          className="login-name"
          value={login}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="login-password"
          value={password}
        />
        {localStorage.getItem("login") && localStorage.getItem("password") ? (
          <button
            onClick={() =>
              checkAuth(
                login,
                password,
                dispatch,
                setAuthError,
                setLogin,
                setPassword
              )
            }
            className="login-submit"
          >
            Access
          </button>
        ) : (
          <button
            onClick={() => registerFunc(login, password, setShowCredits)}
            className="login-submit"
          >
            Register
          </button>
        )}
        {showCredits ? (
          <div className="tip">
            Login:{login} Password:{password}
          </div>
        ) : (
          ""
        )}
        {authError ? (
          <div className="Error">
            Authentication Error | Wrong Creds
            <br />
            CTRL + C <br />
            Application -> Local Storage
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Login;
