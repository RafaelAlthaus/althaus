import React, { Component } from 'react';
import react from '../resources/svgs/react.svg';
import placa1 from '../resources/svgs/placa1.svg';
import placa2 from '../resources/svgs/placa2.svg';
import ram from '../resources/svgs/ram.svg';
import satelite from '../resources/svgs/satelite.svg';
import php from '../resources/svgs/php.svg';
import docker from '../resources/svgs/docker.svg';
import java from '../resources/svgs/java.svg';
import nodejs from '../resources/svgs/nodejs.svg';
import smartphone from '../resources/svgs/smartphone.svg';
import code from '../resources/svgs/code.svg';
import data from '../resources/svgs/data.svg';
import '../styles/App.css';
import Button from 'antd/es/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Sky from 'react-sky';
import Col from 'antd/es/col';
import Row from 'antd/es/row';

export default class Header extends Component {
    clickWhatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=' + this.props.data.whatsapp + '&text=Ol%C3%A1,%20Rafael!', '_blank');
    }

    clickLinkedin = () => {
        window.open('https://www.linkedin.com/in/' + this.props.data.linkedin, '_blank');
    }

    clickGithub = () => {
        window.open('https://github.com/' + this.props.data.github, '_blank');
    }

    render() {
        const skyImages = {
            0: react,
            1: placa1,
            2: placa2,
            3: ram,
            4: satelite,
            5: php,
            6: docker,
            7: java,
            8: nodejs,
            9: smartphone,
            10: code,
            11: data,
        };

        return (
            <header className="appHeader">
                <div>
                    <Sky how={40} time={280} size={'120px'} background={'#282c34'} images={skyImages} />

                    <Row gutter={16} style={{ margin: '65px 0px 65px 0px' }}>
                        <Col>
                            <h1 className="headingCTA">Prazer, <span style={{ color: '#61dafb' }}>{this.props.data.nome}.</span></h1>
                            <p className='subtitleCTA'>{this.props.data.subtitle}</p>

                            <div className="buttonsCTA">
                                <Button type="primary" className="btnSocial btnGithub" onClick={() => this.clickGithub()}><FontAwesomeIcon icon={faGithub} className="btnIcon" />Github</Button>
                                <Button type="primary" className="btnSocial btnLinkedin" onClick={() => this.clickLinkedin()}><FontAwesomeIcon icon={faLinkedin} className="btnIcon" />LinkedIn</Button>
                                <Button type="primary" className="btnSocial btnWhatsApp" onClick={() => this.clickWhatsApp()}><FontAwesomeIcon icon={faWhatsapp} className="btnIcon" />WhatsApp</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        );
    }
}