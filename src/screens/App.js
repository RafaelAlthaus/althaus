import React, { Component } from 'react';
import Road from '../components/Road';
import Header from '../components/Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class App extends Component {



  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <div className="app">
        <Header nome="Rafael Althaus" whatsapp="5542999042259" github="RafaelAlthaus" linkedin="rafael-althaus-3459b8a5" />

        <div className="quemSou">
          <div className="divHeading">
            <h1 className="heading">Na realidade, o que eu faço?</h1>
            <p className='subtitle'>
              Desenvolvimento de produtos focados em entregar valor real, não apenas código.
            </p>
          </div>
        </div>

        <div className="tecnologias">
          <div className="divHeading">
            <h1 className="headingColor">O que aprendi até agora?</h1>
            <p className='subtitleColor'>
              Todo projeto exige uma stack de tecnologias próprias e que fazem sentido pro seu caso de uso. Portanto, acumulei incotáveis horas de trabalho
              com diferentes linguagens, frameworks e serviços.
            </p>
          </div>

          <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            autoPlay={true}
            autoPlaySpeed={1000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={true}
          >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
          </Carousel>

          <div className="divImgTecnologias">
            <img src="/images/tecnologias.png" className="imgTecnologias" />
          </div>
        </div>

        <Road />

        <div className="divHeading">
          <h1 className="heading">O que me interessa no momento</h1>
          <p className='subtitle'>
            De tempos em tempos, alguns assuntos prendem minha atenção.
            </p>
        </div>

        <div className="appFooter">
          <p className="pFooter">🚀 Site de código aberto disponível em meu <a href="https://github.com/RafaelAlthaus/althaus" target="_blank">GitHub.</a> 🚀</p>
        </div>
      </div>
    );
  }
}
