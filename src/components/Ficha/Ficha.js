import React, { useState } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import Swal from '../Comp/Swal';

// import { withSwalInstance } from 'sweetalert2-react';
// import sweetalert2 from 'sweetalert2';

import db from "../../db/db"

// const Swal = withSwalInstance(sweetalert2);

const items = [
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="text-center"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}


class Ficha extends React.Component {

    state = {
        dropdownOpen: false,
        ficha: {
            nomeCompleto: "",
            campos: {},
            files: []
        },
        carousel: {
            activeIndex: 0,
            animating: false
        }
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getFicha() {
        this.n = 0
        db.getFicha(this.props.match.params.num).then(ficha => {
            this.setState({ ficha: ficha })
        })
    }

    next = () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === items.length - 1 ? 0 : this.state.carousel.activeIndex + 1;
        this.setState({ carousel: { activeIndex: nextIndex } })
        this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
    }

    previous = () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === 0 ? items.length - 1 : this.state.carousel.activeIndex - 1;
        this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
    }
    goToIndex = (newIndex) => {
        if (this.state.carousel.animating) return;
        this.setState({ carousel: { ...this.state.carousel, activeIndex: newIndex } })
    }

    componentDidMount() {
        this.getFicha()
    }

    slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => this.setState({ carousel: { ...this.state.carousel, animating: true } })}
                onExited={() => this.setState({ carousel: { ...this.state.carousel, animating: false } })}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>{this.state.ficha.nomeCompleto}
                        {/* <small><Trans i18nKey='dashboard.WELCOME'></Trans></small> */}
                    </div>
                    { /* START Language list */}
                    {/* <div className="ml-auto">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle>
                                English
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right-forced animated fadeInUpShort">
                                <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
                                <DropdownItem onClick={() => this.changeLanguage('es')}>Spanish</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div> */}
                    { /* END Language list */}
                </div>
                {/* <Col xs={12} className="text-center">
                        <h2 className="text-thin">Single view content</h2>
                        <p>
                            This project is an application skeleton. You can use it to quickly bootstrap your ReactJS webapp projects and dev environment for these projects.
                            <br />
                            The seed app doesn't do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.
                        </p>
                    </Col> */}
                <div>
                    {/* <p>{this.state.ficha.nomeCompleto}</p> */}
                    <ul>
                        {Object.keys(this.state.ficha.campos).map((key, index) => {
                            return <li key={this.n++}><p> {key}</p><p>{this.state.ficha.campos[key]}</p></li>
                        })}
                    </ul>
                    {/* <ul>
                        {this.state.ficha.files.map(url => {
                            return <li key={this.n++}><img className="rounded thumb64" src={url} style={{ "maxWidth": "600px" }}></img></li>
                        })}
                    </ul> */}
                </div>

                {/* <div className="col-md-6"> */}
                {/* START card- */}
                {/* <div className="card bg-purple"> */}
                {/* <div className="card-body text-center">
                        <p className="mb-3">
                            <img className="rounded thumb64" src="img/user/08.jpg" alt="Demo" />
                        </p> */}
                <Card className="card-default" style={{ justifyContent: 'center' }}>
                    <CardHeader>
                        <legend>Fotos</legend>
                    </CardHeader>
                    <CardBody>
                        <Row >
                            {/* <ul style={{ "listStyleType": "none" }}> */}
                            {this.state.ficha.files.map(url => {

                                // return <li key={this.n++} style={{ float: "left" }}>
                                //     // <img className="rounded thumb64" src={url} style={{ "maxWidth": "600px" }}></img> 
                                //     <Swal options={{
                                //         imageUrl: url,
                                //         //imageHeight: 1500,
                                //         imageAlt: 'Carregando...',
                                //         showConfirmButton: false,
                                //         showCloseButton: true
                                //     }} className="btn">
                                //         <img className="rounded" style={{ width: 246, height: 246 }} src={url} alt="Demo" />
                                //     </Swal>
                                // </li>

                                return <Col className="ml-auto mr-auto" md={6} lg={4} xl={3} key={this.n++}>
                                    {/* <img className="rounded thumb64" src={url} style={{ "maxWidth": "600px" }}></img> */}
                                    <Swal options={{
                                        imageUrl: url,
                                        //imageHeight: 1500,
                                        width: "80%",
                                        imageAlt: 'Carregando...',
                                        showConfirmButton: false,
                                        showCloseButton: true
                                    }} className="btn">
                                        <img className="rounded" style={{ width: 170, height: 170 }} src={url} alt="Demo" />
                                    </Swal>
                                </Col>
                            })}
                            {/* </ul> */}
                        </Row>
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

export default withTranslation()(Ficha);