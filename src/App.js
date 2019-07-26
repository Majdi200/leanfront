import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavMain from "./component/NavMain";
import HomePage from "./pages/Home";
import Signin from "./pages/Signin.js";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import SelfAudit from "./pages/SelfAudit";
import SelfAuditDetails from "./pages/SelfAuditDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Resultat from "./pages/resultat";
import Formation from "./pages/Formations";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavMain />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/contact" component={contact} /> */}
          <Route exact path="/audit" component={SelfAudit} />
          <Route exact path="/audit/:id" component={SelfAuditDetails} />
          <Route path="/resultat" component={Resultat} />
          <Route path="/formation-lean" component={Formation} />
        </Switch>
      </div>
    );
  }
}

export default App;
