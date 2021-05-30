import "./App.css";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
