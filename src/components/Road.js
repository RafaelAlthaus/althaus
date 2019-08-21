import React, { Component } from 'react';
import '../styles/App.css';
import RoadCard from './RoadCard';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';

export default class Road extends Component {

    render() {
        const works = [
            {
                title: 'SantéMed',
                text: 'Atualmente como Líder de R&D, responsável pela gestão de infraestrutura e desenvolvimento do software.',
                star: true
            },
            {
                title: 'App Mobile #01',
                text: 'Aplicativo destinado a amantes de essências e produtos relacionados ao consumo do narguilé.'
            },
            {
                title: 'App Mobile #02',
                text: 'Aplicativo para o mercado imobiliário que criou uma forma única de interação entre compradores e vendedores.'
            },
            {
                title: 'App Mobile #03',
                text: 'Aplicativo criado para um sindicato que inovou ao oferecer seus serviços ao sindicalizado através do smartphone.'
            },
            {
                title: 'App Mobile #04',
                text: 'Aplicativo criado para um coach que buscava uma forma de oferecer conteúdos exclusivos para seu clientes.'
            },
            {
                title: 'App Mobile #05',
                text: 'Aplicativo criado para um médico que buscava facilitar o acompanhamento da gestação de suas pacientes.'
            },
            {
                title: 'Web App #01',
                text: 'Aplicação online para crowdfunding de empreendimentos imobiliários.'
            },
            {
                title: 'Web App #02',
                text: 'Aplicação local para uma multinacional Japonesa que buscava interpretar e centralizar dados de notas de compra.'
            },
            {
                title: 'Web App #03',
                text: 'Aplicação online com funções administrativas destinada a uma escola de idiomas.'
            },
        ];

        return (
            <div className="divHeading">
                <h1 className="heading">O caminho até aqui...</h1>
                <p className='subtitle'>
                    Abaixo estão alguns projetos que merecem ser mencionados. Alguns nomes e detalhes foram ocultados para não comprometer termos de confidencialidade que
                    podem valer antes, durante e depois da conclusão dos projetos, assim como proteger as empresas contratadas e contratantes dos serviços prestados.
                </p>

                <RoadCard list={works} />

                <Row gutter={16}>
                    <Col className="cardColumn">
                        <Card headStyle={{ fontSize: '26px' }} title="+16 outros projetos" bordered={false}>
                            <p style={{ fontSize: '19px' }}>A lista ficaria <b>grande demais pra colocar tudo.</b> E-commerces, sites institucionais, apps de uso interno, refatoração de antigos projetos e por aí vai.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
