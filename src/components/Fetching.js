import React, { Component } from 'react';
import '../styles/App.css';
import Lottie from 'react-lottie';
import Spin from 'antd/es/spin';
import animationData from '../resources/lotties/programming.json';

export default class Fetching extends Component {

    mensagens = [
        'Aguardando satélites entrarem em posição...',
        'Aprecie a música de elevador...',
        'Discando, aguarde...',
        'Calculando a constante de gravidade na sua localização...',
        'Conectando os tubos da rede...',
        'Trazendo a carta de vinhos...',
        'E esse tempo que não firma?',
        'Nossos elfos mágicos estão trabalhando freneticamente...',
        'Que cheirinho de café!',
        'Dobrando o espaço-tempo...',
        'Girando violentamente em volta do eixo Y...',
        'Acho que precisamos de um fusível novo...',
        'Talvez seja melhor buscar um café.',
        'Insira uma moeda para continuar...',
        'Computando as chances de sucesso...',
        'Será que eu esqueci de carregar algo?',
        'Ajustado o capacitador de fluxo...',
        'Eu juro que tá quase acabando!',
        "Colocando os pingos nos i's",
        'You shall not pass! Ainda...',
        'Ajustando IA para não se rebelar...',
        'Tá sentindo esse cheiro de queimado?',
        'Já tentou desligar e ligar novamente?',
        'Aguardando a tinta secar...',
        'Mais rápido que a atualização do Windows.',
        'Decifrando criptografia de nível militar...',
        'Dividindo por zero...',
        'Tudo nesse universo é uma batata ou não é uma batata.',
        'Colocando mais carvão no servidor...',
        'Sinta-se livre pra girar na cadeira.',
        'Aguarde, consultando o manual...'
    ];

    random = Math.floor(Math.random() * this.mensagens.length);

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className='appLoading'>
                <Lottie style={{ marginTop: '-90px' }} options={defaultOptions} height={320} width={350} />
                <p className='loadingMessage'>{`${this.mensagens[this.random]}`}</p>
                <Spin size="large" />
            </div>
        );
    }
};
