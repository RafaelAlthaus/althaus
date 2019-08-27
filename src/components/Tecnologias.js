import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/App.css';

export default class Tecnologias extends Component {

    render() {
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 1900 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 1400, min: 1024 },
                items: 4,
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

        const imagesJpg = [
            'laravel',
            'php',
            'java',
            'jee',
            'aws',
            'docker',
            'nginx',
            'google',
            'mysql',
            'node',
            'react',
            'redis',
            'spring',
            'watson',
            'codeigniter',
            'payara',
            'phonegap',
        ];

        return (
            <div className="tecnologias">
                <div className="divHeading">
                    <h1 className="headingColor">{this.props.data.title}</h1>
                    <p className='subtitleColor'>{this.props.data.subtitle}</p>
                </div>

                <div className="divCarousel">
                    <Carousel responsive={responsive} swipeable={true} draggable={true} customLeftArrow={<div></div>} customRightArrow={<div></div>}
                        autoPlay={true} autoPlaySpeed={1200} removeArrowOnDeviceType={["tablet", "mobile"]} infinite={true}>
                        {
                            imagesJpg.map((obj, i) => {
                                return (
                                    <div key={i}><img alt='' src={'/images/logos/' + obj + '.jpg'} className="imgLogo" /></div>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}