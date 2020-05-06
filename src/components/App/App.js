import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import NamePage from "../RegistrationPages/NamePage";
import GenderPage from "../RegistrationPages/GenderPage";
import DobPage from "../RegistrationPages/DobPage";
import LocationPage from "../RegistrationPages/LocationPage";
import PhonePage from "../RegistrationPages/PhonePage";
import InterestPage from "../RegistrationPages/InterestPage";
import PhotosPage from "../RegistrationPages/PhotosPage";
import DetailsPage from "../RegistrationPages/DetailsPage";
import AudioRecordingPage from "../RegistrationPages/AudioRecordingPage";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/home" component={LandingPage} />

            <Route exact path="/phone" component={PhonePage} />
            <Route exact path="/interest" component={InterestPage} />
            <Route exact path="/photos" component={PhotosPage} />
            <Route exact path="/details" component={DetailsPage} />
            <Route exact path="/audio" component={AudioRecordingPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute exact path="/admin" component={UserPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
            <ProtectedRoute
              exact
              path="/login"
              authRedirect="/admin"
              component={LoginPage}
            />

            <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/admin"
              component={RegisterPage}
            />

            <ProtectedRoute
              exact
              path="/name"
              authRedirect="/admin"
              component={NamePage}
            />

            <ProtectedRoute
              exact
              path="/gender"
              authRedirect="/admin"
              component={GenderPage}
            />

            <ProtectedRoute
              exact
              path="/dob"
              authRedirect="/admin"
              component={DobPage}
            />

            <ProtectedRoute
              exact
              path="/location"
              authRedirect="/admin"
              component={LocationPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
