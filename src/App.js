import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNavigation from "./components/topNavigation";
import SideNavigation from "./components/sideNavigation";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import "./index.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

// import {grpc} from "@improbable-eng/grpc-web";
const axios = require("axios");
const logout = res => {
  console.log(res);
};

class App extends Component {
  jwt = "";
  constructor() {
    super();
  }
  responseGoogle = response => {
    console.log(response);
    axios
      .get("http://localhost:9090/login", { params: { tokenId: response.tokenId } })
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log(res);
        this.jwt = res.data.jwt;
      })
      .catch(error => {
        console.error(error.response.data);
      });
  };
  queryApi = () => {
    axios
      .get("http://localhost:9090/api", { params: { jwt: this.jwt } })
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log(res);
      })
      .catch(err => {
        console.error(err.response);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="flexible-content">
            {/* <TopNavigation /> */}
            <SideNavigation />
            <main id="content" className="p-5 main-content">
              <GoogleLogin clientId="897202690294-f840ec3n73n9grvbgdh8b04kvbhtu4tf.apps.googleusercontent.com" buttonText="Login" onSuccess={this.responseGoogle} cookiePolicy={"single_host_origin"} />
              <GoogleLogout clientId="897202690294-f840ec3n73n9grvbgdh8b04kvbhtu4tf.apps.googleusercontent.com" buttonText="Logout" onLogoutSuccess={logout} />
              <button onClick={this.queryApi}>Query Api</button>
              <Switch>
                <Route path="/" exact component={() => <DashboardPage />} />
              </Switch>
            </main>
            {/* <Footer /> */}
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
