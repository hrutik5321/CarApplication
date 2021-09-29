import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Creator from "./pages/Creator";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail" exact>
            <Details />
          </Route>
          <Route path="/creator" exact>
            <Creator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
