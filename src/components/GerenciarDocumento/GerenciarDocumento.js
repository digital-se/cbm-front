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
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Swal from '../Comp/Swal';

// import { withSwalInstance } from 'sweetalert2-react';
// import sweetalert2 from 'sweetalert2';

import db from "../../db/db"

// const Swal = withSwalInstance(sweetalert2);

const items = [
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 1',
        caption: 'pagina3.png'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 2',
        caption: 'Arquivo27.jpg'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 3',
        caption: 'Salada.gif'
    },
    {
        src: 'https://i1.wp.com/www.rpgnext.com.br/wp-content/uploads/2015/09/DD-5th-Character-Sheet-Primeira-p%C3%A1gina.jpg?fit=1233%2C1600&ssl=1',
        altText: 'Slide 4',
        caption: 'Ficha D&D'
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
            style={{ "minHeight": "250px" }}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}


class GerenciarDocumento extends React.Component {

    state = {
        dropdownOpen: false,
        documento: {
            nomeCompleto: "",
            campos: {
                "nome": "",
                "data": "",
                "tipo": "",
                "descricao": "",
                "militares": [],
            },
            arquivos: []
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

    // getFicha() {
    //     this.n = 0
    //     db.getFicha(this.props.match.params.num).then(ficha => {
    //         this.setState({ ficha: ficha })
    //     })
    // }

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
        // this.getFicha()
    }

    slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => this.setState({ carousel: { ...this.state.carousel, animating: true } })}
                onExited={() => this.setState({ carousel: { ...this.state.carousel, animating: false } })}
                key={item.src}
                style={{ "padding": "0" }}
            >
                <Swal options={{
                    imageUrl: item.src,
                    //imageHeight: 1500,
                    width: "80%",
                    imageAlt: 'Carregando...',
                    showConfirmButton: false,
                    showCloseButton: true
                }} className="btn d-md-block">
                    <img src={item.src} alt={item.altText} style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", maxHeight: "550px" }} />
                </Swal>
                {/* <CarouselCaption captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    render() {
        return (
            <ContentWrapper>
                {/* <div className="content-heading">
                    <div>{this.state.ficha.nomeCompleto}
                    </div>
                </div>
                <div>
                    <ul>
                        {Object.keys(this.state.ficha.campos).map((key, index) => {
                            return <li key={this.n++}><p> {key}</p><p>{this.state.ficha.campos[key]}</p></li>
                        })}
                    </ul>
                </div>
                <Card className="card-default" style={{ justifyContent: 'center' }}>
                    <CardHeader>
                        <legend>Fotos</legend>
                    </CardHeader>
                    <CardBody>
                        <Row >
                            {this.state.ficha.files.map(url => {
                                return <Col className="ml-auto mr-auto" md={6} lg={4} xl={3} key={this.n++}>
                                    {/* <img className="rounded thumb64" src={url} style={{ "maxWidth": "600px" }}></img> *}
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
                            {/* </ul> *}
                        </Row>
                    </CardBody>
                </Card> */}
                <Row>
                    <Col>
                        <Card className="card-default" style={{ justifyContent: 'center' }}>
                            <Row>
                                <Col sm={12} lg={8}>
                                    <CardHeader style={{ textAlign: 'center' }}>
                                        <h3>Nome do Documento</h3>
                                    </CardHeader>
                                    <CardBody style={{ "resize": "none" }}>
                                        <h4 style={{ textAlign: "center", backgroundColor: "#ebebeb", borderRadius: "5px", margin: "16px", padding: "12px", fontWeight: "bold" }}>{items[this.state.carousel.activeIndex].caption}</h4>
                                        <Carousel
                                            activeIndex={this.state.carousel.activeIndex}
                                            next={this.next}
                                            previous={this.previous}
                                            interval={false}
                                            style={{ minHeight: "650px" }}
                                        >
                                            {/* <CarouselIndicators items={items} activeIndex={this.state.carousel.activeIndex} onClickHandler={this.goToIndex} /> */}
                                            {this.slides}
                                            {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
                                        </Carousel>
                                        <Pagination aria-label="Page navigation example" className="d-flex justify-content-center">
                                            <PaginationItem>
                                                <PaginationLink previous onClick={this.previous} />
                                            </PaginationItem>
                                            {/* <PaginationItem>
                                                    <PaginationLink onClick={() => this.goToIndex(0)}>
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem> */}
                                            {items.map((item, index) => {
                                                return (
                                                    <PaginationItem key={index}>
                                                        <PaginationLink onClick={() => this.goToIndex(index)}>
                                                            {index + 1}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                )
                                            })}
                                            <PaginationItem>
                                                <PaginationLink next onClick={this.next} />
                                            </PaginationItem>
                                        </Pagination>
                                    </CardBody>
                                </Col>
                                <Col sm={12} lg={4}>
                                    <CardHeader>
                                        <h3>Texto Extraido</h3>
                                    </CardHeader>
                                    <CardBody>
                                        {/* <Container className="card flex-row align-items-center align-items-stretch border-0">
                                            <Row className="card flex-row align-items-center align-items-stretch border-0">
                                                <Col sm={8}>
                                                    <Button block color="danger">Editar Documento</Button>
                                                </Col>
                                            </Row>
                                            <Row className="card flex-row align-items-center align-items-stretch border-0">
                                                <Col sm={8}>
                                                    <Button block color="danger">Editar Arquivo</Button>
                                                </Col>
                                            </Row>
                                        </Container> */}
                                        <div style={{ "padding": "15px", "max-width": "200px" }}>
                                            {/*<em className="fa ml-2 fas fa-icon-pencil" /> */}
                                            <Button disabled block color="danger">Editar Documento</Button>
                                            <Button disabled block color="danger">Editar Arquivo</Button>
                                        </div>
                                        <Card>
                                            <CardBody>
                                                <Input disabled type="textarea" name="ocr" id="ocr" value={"blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nbruh"} style={{ "resize": "none", "height": "390px" }} />
                                            </CardBody>
                                        </Card>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={12} xl={3}>
                        <Card className="card-default" style={{ justifyContent: 'center' }}>
                            <CardHeader>
                                <h3>Informações do documento</h3>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="nome"><h4>Nome do Documento</h4></Label>
                                                <Input
                                                    disabled
                                                    style={{ minWidth: 182 }}
                                                    name="nome"
                                                    id="nome"
                                                    value={"Documento documentosão"}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numeracao"><h4>Numeração do documento</h4></Label>
                                                <Input
                                                    disabled
                                                    style={{ minWidth: 182 }}
                                                    name="numeracao"
                                                    id="numeracao"
                                                    value={"123456"}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <FormGroup>
                                                <Label for="data"><h4>Data</h4></Label>
                                                <Input
                                                    disabled
                                                    block
                                                    // type="date"
                                                    name="data"
                                                    id="data"
                                                    // max="9999-12-31"
                                                    value={"2020-12-31"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm={6}>
                                            <FormGroup>
                                                <Label for="tipo"><h4>Tipo</h4></Label>
                                                <Input
                                                    disabled
                                                    name="tipo"
                                                    id="tipo"
                                                    value={"BGO"}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="descricao"><h4>Descrição</h4></Label>
                                                <Input disabled type="textarea" name="descricao" id="descricao" value={"blablablablablabruh"} style={{ "resize": "none", "height": "120px" }} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label for="militares"><h4>Militares</h4></Label>
                                            <ListGroup id="militares" style={{ "maxHeight": "195px", "overflow": "auto" }}>
                                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                                <ListGroupItem>Morbi leo risus</ListGroupItem>
                                                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                <ListGroupItem>Pindamonhangava at linaldo</ListGroupItem>
                                                <ListGroupItem>Juleibes ni aterois</ListGroupItem>
                                                <ListGroupItem>Sacodei la vizinhansa</ListGroupItem>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper >
        );
    }
}

export default withTranslation()(GerenciarDocumento);