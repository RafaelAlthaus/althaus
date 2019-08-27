import React, { Component } from 'react';
import '../styles/App.css';

export default class Footer extends Component {

    render() {
        return (
            <div className="appFooter">
                <p className="pFooter">🚀 Site de código aberto disponível em meu <a href="https://github.com/RafaelAlthaus/althaus" target="_blank">GitHub.</a> 🚀</p>
            </div>
        );
    }
}