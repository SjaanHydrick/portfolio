import React, { Component } from 'react';
import mvb from './MVB/MVB2.png';
import alchezoomy from './AlcheZoomy/alchezoomy.png'
import pokemon from './Foundations/pokemoncatcher.png';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h2>Projects</h2>
                <div className="alchezoomy">
                    <h3 className="title1"><a href="https://alchezoomy.netlify.app/">AlcheZoomy</a></h3>
                    <img src={alchezoomy} alt="AlcheZoomy"/>
                    <p>JavaScript, CSS, Node.js, PostgresSQL, React</p>
                    <a href="https://github.com/Alchezoomy"><p className="symbol">{ '<' }</p></a>
                </div>
                <div className="mvb">
                    <h3 className="title2"><a href="https://sjaanhydrick.github.io/my-vampire-boyfriend/index.html">My Vampire Boyfriend</a></h3>
                    <img src={mvb} alt="My Vampire Boyfriend"/>
                    <p>JavaScript, CSS, HTML</p>
                    <a href="https://github.com/SjaanHydrick/my-vampire-boyfriend"><p className="symbol">{ '<' }</p></a>
                </div>
                <div className="pokemon">
                    <h3 className="title3"><a href="https://sjaanhydrick.github.io/lab-11-pokemon-catcher/">Pokemon Catcher</a></h3>
                    <img src={pokemon} alt="Pokemon Catcher"/>
                    <p>JavaScript, CSS, HTML</p>
                    <a href="https://github.com/SjaanHydrick/lab-11-pokemon-catcher"><p className="symbol">{ '<' }</p></a>
                </div>
            </div>
        )
    }
}
