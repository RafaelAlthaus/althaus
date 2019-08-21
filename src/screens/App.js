import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import Button from 'antd/es/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Road from './components/Road';

export default class App extends Component {

  clickWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=554299942259&text=Ol%C3%A1,%20Rafael!', '_blank');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>

          <div className="divHeading">
            <h1 className="heading">Prazer, Rafael Althaus.</h1>
            <p className='subtitle'>
              
            </p>
          </div>

          <div className="divHeading">
            <h1 className="heading">Na realidade, o que eu faço?</h1>
            <p className='subtitle'>
              Desenvolvimento de produtos focados em entregar valor real, não apenas código.
            </p>
          </div>

          <div className="divHeading">
            <h1 className="heading">O que aprendi até agora?</h1>
            <p className='subtitle'>
              Todo projeto exige uma stack de tecnologias próprias e que fazem sentido pro seu caso de uso. Portanto, acumulei incotáveis horas de trabalho
              com diferentes linguagens, frameworks e serviços.
            </p>
          </div>

          <Road />

          <div className="divHeading">
            <h1 className="heading">O que me interessa no momento</h1>
            <p className='subtitle'>
              De tempos em tempos, alguns assuntos prendem minha atenção.
            </p>
          </div>

          <Button type="primary" className="btnWhatsApp" onClick={() => this.clickWhatsApp()}><FontAwesomeIcon icon={faWhatsapp} className="btnIcon" />Me dá um oi pelo WhatsApp!</Button>
        </header>
      </div>
    );
  }
}
