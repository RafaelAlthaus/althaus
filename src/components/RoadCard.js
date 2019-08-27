import React, { Component } from 'react';
import '../styles/App.css';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';

export default class Road extends Component {

    render() {
        return (
            <Row gutter={16}>
                {
                    this.props.list.map((obj, i) => {
                        return (
                            <Col key={i} xs={32} sm={32} md={12} lg={12} xl={12} className="cardColumn">
                                <Card style={{ borderRadius: 12 }} title={<p className='cardTitle'>{obj.title}</p>} bordered={false} bodyStyle={{ height: '150px' }}>
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
