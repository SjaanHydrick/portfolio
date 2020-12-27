import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <Link to="/projects"><div className="project-link">
                    <span className="link">Projects</span>
                </div></Link>
                <Link to="/resume"><div className="resume-link">
                    <span className="link">Resume</span>
                </div></Link>
            </div>
        )
    }
}
