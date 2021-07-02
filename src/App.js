import "./App.css";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const authState = useSelector((state) => state.isAuthenticated);
  return (
    <div className="wrapper">
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/profile" component={authState ? Profile : Login} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
