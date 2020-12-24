import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
//import Resume from './Resume.js';
import LandingPage from './Landing.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
            path = "/"
            exact render={(routerProps) => <LandingPage {...routerProps} />}
            />

            {/* <Route
            path = "/resume"
            exact render={(routerProps) => <ResumePage {...routerProps} />}
            /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}