import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Sjaan Hydrick</h1>
                <div className="contact">
                    <span className="icon">{ '>' }</span> <a href="mailto: sjaanahydrick@gmail.com">sjaanahydrick@gmail.com</a>
                    <span className="icon"> i</span> <a href="https://www.linkedin.com/in/sjaan-hydrick/">/sjaan-hydrick</a>
                    <span className="icon">{ '<' }</span> <a href="https://github.com/SjaanHydrick">/SjaanHydrick</a>
                </div>
            </div>
        )
    }
}
