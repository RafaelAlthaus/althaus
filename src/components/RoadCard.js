import React, { Component } from 'react';
import '../styles/App.css';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class Road extends Component {

    render() {
        return (
            <Row gutter={16}>
                {
                    this.props.list.map((obj, i) => {
                        if (obj.star) {
                            obj.title = <span>⭐️ {obj.title}</span>
                        }

                        return (
                            <Col key={i} xs={32} sm={32} md={8} lg={8} xl={8} className="cardColumn">
                                <Card title={obj.title} bordered={false} bodyStyle={{ height: '175px' }}>
                                    <p className='cardText'>{obj.text}</p>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }
}
