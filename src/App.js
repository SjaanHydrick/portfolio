import React, { Component } from 'react'
import './style/App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import ResumePage from './Resume.js';
import LandingPage from './Landing.js';
import Projects from './Projects.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
            path = "/"
            exact render={(routerProps) => <LandingPage {...routerProps} />}
            />

            <Route
            path = "/resume"
            exact render={(routerProps) => <ResumePage {...routerProps} />}
            />

            <Route
            path = "/projects"
            exact render={(routerProps) => <Projects {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}