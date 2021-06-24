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

class GerenciarDocumento extends React.Component {

    state = {
        dropdownOpen: false,
        documento: {
            campos: {
                nome: "",
                numeracao: "",
                data: "",
                tipo: "",
                descricao: "",
                militares: [],
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

    next = () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === this.state.documento.arquivos.length - 1 ? 0 : this.state.carousel.activeIndex + 1;
        this.setState({ carousel: { activeIndex: nextIndex } })
        this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
    }

    previous = () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === 0 ? this.state.documento.arquivos.length - 1 : this.state.carousel.activeIndex - 1;
        this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
    }
    goToIndex = (newIndex) => {
        if (this.state.carousel.animating) return;
        this.setState({ carousel: { ...this.state.carousel, activeIndex: newIndex } })
    }

    async componentDidMount() {
        // this.getFicha()
        let a = {
            campos: {
                nome: "Documento teste",
                numeracao: "123",
                data: "2020-06-24",
                tipo: "BGO",
                descricao: "Um documento para testes de documentos",
                militares: [
                    {
                        nome: "Cras justo odio",
                        matricula: "123"
                    },
                    {
                        nome: "Dapibus ac facilisis in",
                        matricula: "123"
                    },

                    {
                        nome: "Morbi leo risus",
                        matricula: "123"
                    },

                    {
                        nome: "Porta ac consectetur ac",
                        matricula: "123"
                    },

                    {
                        nome: "Vestibulum at eros",
                        matricula: "123"
                    },

                    {
                        nome: "Pindamonhangava at linaldo",
                        matricula: "123"
                    },

                    {
                        nome: "Juleibes ni aterois",
                        matricula: "123"
                    },

                    {
                        nome: "Sacodei la vizinhansa",
                        matricula: "123"
                    },

                ],
            },
            arquivos: [
                {
                    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                    caption: 'pagina3.png',
                    ocr: "Teste ocr variavel"
                },
                {
                    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                    caption: 'Arquivo27.jpg',
                    ocr: "Teste 2, ocr\n\n com linhas adaptaveis"
                },
                {
                    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                    caption: 'Salada.gif',
                    ocr: "ioppoi"
                },
                {
                    src: 'https://i1.wp.com/www.rpgnext.com.br/wp-content/uploads/2015/09/DD-5th-Character-Sheet-Primeira-p%C3%A1gina.jpg?fit=1233%2C1600&ssl=1',
                    caption: 'Ficha D&D',
                    ocr: "ghjjhg"
                }
            ]
        }
        await this.setState({ documento: a })
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col>
                        <Card className="card-default" style={{ justifyContent: 'center' }}>
                            <Row>
                                <Col sm={12} lg={8}>
                                    <CardHeader style={{ textAlign: 'center' }}>
                                        <h3>{this.state.documento.campos.nome}</h3>
                                    </CardHeader>
                                    <CardBody style={{ "resize": "none" }}>
                                        <h4 style={{ textAlign: "center", backgroundColor: "#ebebeb", borderRadius: "5px", margin: "16px", padding: "12px", fontWeight: "bold" }}>{this.state.documento.arquivos[this.state.carousel.activeIndex]?.caption}</h4>
                                        <Carousel
                                            activeIndex={this.state.carousel.activeIndex}
                                            next={this.next}
                                            previous={this.previous}
                                            interval={false}
                                            style={{ minHeight: "650px" }}
                                        >
                                            {this.state.documento.arquivos.map((item) => {
                                                return (
                                                    <CarouselItem
                                                        onExiting={() => this.setState({ carousel: { ...this.state.carousel, animating: true } })}
                                                        onExited={() => this.setState({ carousel: { ...this.state.carousel, animating: false } })}
                                                        key={item.src}
                                                        style={{ "padding": "0" }}
                                                    >
                                                        <Swal options={{
                                                            imageUrl: item.src,
                                                            width: "80%",
                                                            imageAlt: 'Carregando...',
                                                            showConfirmButton: false,
                                                            showCloseButton: true
                                                        }} className="btn d-md-block">
                                                            <img src={item.src} alt={item.caption} style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%", maxHeight: "550px" }} />
                                                        </Swal>
                                                    </CarouselItem>
                                                );
                                            })}
                                        </Carousel>
                                        <Pagination aria-label="Page navigation example" className="d-flex justify-content-center">
                                            <PaginationItem>
                                                <PaginationLink previous onClick={this.previous} />
                                            </PaginationItem>
                                            {this.state.documento.arquivos.map((item, index) => {
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
                                        <div style={{ "padding": "15px", "max-width": "200px" }}>
                                            <Button disabled block color="danger">Editar Documento</Button>
                                            <Button disabled block color="danger">Editar Arquivo</Button>
                                        </div>
                                        <Card>
                                            <CardBody>
                                                <Input disabled type="textarea" name="ocr" id="ocr" value={this.state.documento.arquivos[this.state.carousel.activeIndex]?.ocr} style={{ "resize": "none", "height": "390px" }} />
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
                                                    value={this.state.documento.campos.nome}
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
                                                    value={this.state.documento.campos.numeracao}
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
                                                    name="data"
                                                    id="data"
                                                    value={this.state.documento.campos.data}
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
                                                    value={this.state.documento.campos.tipo}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="descricao"><h4>Descrição</h4></Label>
                                                <Input
                                                    disabled
                                                    type="textarea"
                                                    name="descricao"
                                                    id="descricao"
                                                    value={this.state.documento.campos.descricao}
                                                    style={{ "resize": "none", "height": "120px" }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label for="militares"><h4>Militares</h4></Label>
                                            <ListGroup id="militares" style={{ "maxHeight": "195px", "overflow": "auto" }}>
                                                {this.state.documento.campos.militares.map((item, index) => {
                                                    return (<ListGroupItem key={index}>{item.nome}</ListGroupItem>)
                                                })}
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
