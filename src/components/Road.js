import React, { Component } from 'react';
import '../styles/App.css';
import RoadCard from './RoadCard';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';

export default class Road extends Component {

    render() {
        return (
            <div className="road">
                <div className="divHeading">
                    <h1 className="heading">{this.props.data.title}</h1>
                    <p className='subtitle'>{this.props.data.subtitle}</p>

                    <RoadCard list={this.props.data.works} />

                    <Row gutter={16}>
                        <Col className="cardColumn">
                            <Card style={{ borderRadius: 12 }} title={<p className='cardTitle' style={{ fontSize: '26px' }}>{this.props.data.lastCard.title}</p>} bordered={false}>
                                <p className='cardText'>{this.props.data.lastCard.text}</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
