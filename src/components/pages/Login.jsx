import "../../styles/Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../reducers/authReducer.js";

function registerFunc(login, password, setShowCredits, setLogin, setPassword) {
  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
  setShowCredits(true);
  setLogin("");
  setPassword("");
  setTimeout(() => {
    setShowCredits(false);
  }, 5000);
}

function clearCreds(dispatch, setLogin, setPassword) {
  localStorage.setItem("login", "");
  localStorage.setItem("password", "");
  setLogin("");
  setPassword("");
  dispatch(setAuth(false));
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
    }, 1000);
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
          <>
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
            <button onClick={() => clearCreds(dispatch, setLogin, setPassword)}>
              Clear Credentials
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              registerFunc(
                login,
                password,
                setShowCredits,
                setLogin,
                setPassword
              )
            }
            className="login-submit"
          >
            Register
          </button>
        )}
        {showCredits ? (
          <div className="tip">
            Login:{localStorage.getItem("login")} Password:
            {localStorage.getItem("password")}
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
