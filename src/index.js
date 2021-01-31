import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import DashboardPage from "./views/DashboardPage/DashboardPage";
import ActivitiesPage from "./views/ActivitiesPage/ActivitiesPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

var hist = createBrowserHistory();

ReactDOM.render(
      <BrowserRouter>
        <Router history={hist}>
          <Switch>
              <Route exact path="/profile-page" component={ProfilePage} />
              <Route exact path="/login-page" component={LoginPage} />
              <Route exact path="/register-page" component={RegisterPage} />
            {
            // <Route path="/dashboard-page" component={DashboardPage} />
            //  <Route path="/activities-page" component={ActivitiesPage} />
            }


            <PrivateRoute exact  path="/dashboard-page" componentUser={DashboardPage}  redirectTo={'/login-page'} />
            <PrivateRoute exact  path="/activities-page" componentUser={ActivitiesPage}  redirectTo={'/login-page'}/>

            <Route path="*" component={LoginPage}
                   render={() => {
                     return (
                       <Redirect to="/login-page" />
                     )
                   }}
            />

          </Switch>
        </Router>
      </BrowserRouter>
    ,
  document.getElementById("root")
);
