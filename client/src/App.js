import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";


class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/saved"} component={Saved}/>
              <Route exact path={"/search"} component={Search}/>
              <Route component={NoMatch}/>
            </Switch>
      </Router>
    );
  }
}

export default App;
