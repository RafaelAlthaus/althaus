import React, { Component } from 'react';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import Empty from 'antd/es/empty';
import '../styles/App.css';

export default class Interesse extends Component {

    render() {
        return (
            <div className="interesses">
                <div className="divHeading">
                    <h1 className="headingColor">{this.props.data.title}</h1>
                    <p className='subtitleColor'>{this.props.data.subtitle}</p>
                </div>

                <div>
                    <div className="divHeading">
                        <Row gutter={16}>
                            {this.props.data.links ?
                                this.props.data.links.map((obj, i) => {
                                    return (
                                        <Col key={i} xs={32} sm={32} md={12} lg={12} xl={8} className="cardColumn">
                                            <a href={obj.link} target='_blank' rel="noopener noreferrer">
                                                <Card cover={<div style={{
                                                    height: 200,
                                                    backgroundImage: `url(${obj.img})`,
                                                    backgroundPosition: 'center center',
                                                    backgroundSize: 'cover'
                                                }} ></div>} hoverable>
                                                    <Card.Meta title={obj.title} description={obj.subtitle} />
                                                </Card>
                                            </a>
                                        </Col>
                                    );
                                })
                                : <Empty style={{ margin: '25px 0px 0px 0px' }} description={'Hoje não temos nada por aqui!'} />
                            }
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}