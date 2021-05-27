import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { StaticRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Login />
        <Register />
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
