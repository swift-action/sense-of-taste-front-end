import React from 'react';
// import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
// import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './HomePage';
import Login from './login';
import Profile from './components/Profile';
import Foods from './components/Foods';
import Fitness from './components/Fitness';
import AboutUs from './components/AboutUs';
import FooterNew from './components/FooterNew';







class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <>< HomePage /> <FooterNew/></>: <Login />}
       

            </Route>
            {this.props.auth0.isAuthenticated && <>
              <Route exact path="/Profile">
                <Profile />
              </Route>
              <Route exact path="/Foods">
                <Foods />
              </Route>
              <Route exact path="/Fitness">
                <Fitness />
              </Route>
              <Route exact path="/AboutUs">
                <AboutUs />
              </Route>
        </>}

          </Switch>

          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

