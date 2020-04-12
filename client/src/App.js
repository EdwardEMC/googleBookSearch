import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import View from "./pages/View";
import NoMatch from "./pages/NoMatch";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/saved"} component={Saved}/>
              <Route exact path={"/search"} component={Search}/>
              <Route exact path={"/books/:id"} component={View}/>
              <Route component={NoMatch}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
