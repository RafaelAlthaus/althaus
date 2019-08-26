import React, { Component } from 'react';
import react from '../resources/react.svg';
import placa1 from '../resources/placa1.svg';
import placa2 from '../resources/placa2.svg';
import ram from '../resources/ram.svg';
import satelite from '../resources/satelite.svg';
import php from '../resources/php.svg';
import docker from '../resources/docker.svg';
import java from '../resources/java.svg';
import nodejs from '../resources/nodejs.svg';
import smartphone from '../resources/smartphone.svg';
import code from '../resources/code.svg';
import data from '../resources/data.svg';
import '../styles/App.css';
import Button from 'antd/es/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Sky from 'react-sky';
import Col from 'antd/es/col';
import Row from 'antd/es/row';

export default class Header extends Component {
    clickWhatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=' + this.props.whatsapp + '&text=Ol%C3%A1,%20Rafael!', '_blank');
    }

    clickLinkedin = () => {
        window.open('https://www.linkedin.com/in/' + this.props.linkedin, '_blank');
    }

    clickGithub = () => {
        window.open('https://github.com/' + this.props.github, '_blank');
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
                            <h1 className="headingCTA">Prazer, {this.props.nome}.</h1>
                            <p className='subtitleCTA'>
                            💻 Developer. 📱 
                            </p>

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