import React, { Component } from "react";
import Header from "./components/Header";
import "./photo.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./components/login";
import Monitor from "./Monitor";
import dash from "./components/dash";
import regis from "./components/regis"; 
import bufnew from "./components/bufnew";
import out from "./components/out";
import regisfarm from "./components/regisfarm";
import searchandRegistrational from "./components/searchandRegistrational";
import trace from "./components/trace";
import finish from "./components/finish";
import information from "./components/information";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row  ">
          <div className="container-fluid">
            <Header />
          </div>
        </div>

        <div className="row"></div>
        <div className="row r1"></div>
      </div>
    );
  }
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Monitor} />
        <Route path="/login" component={login} />
        <Route path="/dash" component={dash} />
        <Route path="/regis" component={regis} />
        <Route path="/Footer" component={Footer} />
        <Route path="/bufnew" component={bufnew} />
        <Route path="/out" component={out} />
        <Route path="/regisfarm" component={regisfarm} /> 
        <Route path="/searchandRegistrational" component={searchandRegistrational} />
        <Route path="/trace" component={trace} />
        <Route path="/finish" component={finish} />
        <Route path="/information" component={information} />
      </Switch>
    );
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;
