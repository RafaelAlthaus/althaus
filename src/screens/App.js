import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import Road from '../components/Road';
import Header from '../components/Header';
import Tecnologias from '../components/Tecnologias';
import Interesse from '../components/Interesse';
import Footer from '../components/Footer';
import Fetching from '../components/Fetching';

export default class App extends Component {

  state = {
    data: null,
    loading: true
  }

  fetchData = () => {
    // Todos dados da página são resgatados de um arquivo JSON em um bucket da AWS S3
    // para facilitar manutenção do conteúdo. Caso for servidor local, vai buscar um
    // arquivo que se encontra na pasta public com o nome data.json
    let url = "https://althaus-public.s3.sa-east-1.amazonaws.com/data.json";

    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      url = "data.json";
    }

    axios.get(url).then((response) => {
      this.setState({ data: response.data, loading: false });
    })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.fetchData();
    }, 2500);
  };

  render() {
    return (
      <div className="app">
        {!this.state.loading ?
          <div>
            <Header data={this.state.data.header} />
            <Tecnologias data={this.state.data.tecnologias} />
            <Road data={this.state.data.road} />
            <Interesse data={this.state.data.interesse} />
            <Footer />
          </div>
          : <Fetching />
        }
      </div>
    );
  }
}
