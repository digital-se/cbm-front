import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button, FormGroup, Label } from 'reactstrap';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Swal from '../Comp/Swal';

//import db from "../../db/db"

import axios from "axios"

class Documento extends React.Component {

    state = {
        dropdownOpen: false,
        documento: {
            campos: {
                nome: "Carregando...",
                numeracao: "Carregando...",
                data: "Carregando...",
                tipo: "Carregando...",
                descricao: "Carregando...",
                militares: [],
            },
            arquivos: []
        },
        carousel: {
            activeIndex: 0,
            animating: false
        },
        loading: true,
        editArquivo: true,
        editDocumento: true,
        editDoc: {
            nome: "",
            numeracao: "",
            data: "",
            tipo: "",
            descricao: "",
            militares: [],
        }
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

    toggleEditDocumento = async () => { //backup pra caso rejeite as alterações e recuperar os dados antigos pois serão alterados diretamente

        await this.setState({ ...this.state, editDocumento: false });
        await this.setState({ editDoc: { ...this.state.editDoc, nome: this.state.documento.campos.nome } });
        await this.setState({ editDoc: { ...this.state.editDoc, numeracao: this.state.documento.campos.numeracao } });
        await this.setState({ editDoc: { ...this.state.editDoc, data: this.state.documento.campos.data } });
        await this.setState({ editDoc: { ...this.state.editDoc, descricao: this.state.documento.campos.descricao } });
        await this.setState({ editDoc: { ...this.state.editDoc, tipo: this.state.documento.campos.tipo } });
        await this.setState({ editDoc: { ...this.state.editDoc, militares: this.state.documento.campos.militares } })
    }

    toggleEditArquivo = () => {

    }

    discardChangesDocumento = () => {
        this.setState({ ...this.state, editDocumento: true });
    }

    discardChangesArquivo = () => {

    }

    salvarArquivo = () => {

        this.setState({ ...this.state, editDocumento: true });

    }

    salvarDocumento = () => {
        this.setState({ ...this.state, editDocumento: true });
    }

    changeHandler = async (e) => { //alterar valores editados
        await this.setState({ editDoc: { ...this.state.editDoc, [e.target.name]: e.target.value } });
    }

    awaitResult = async (q) => {
        if (q == true) { //talvez se for false bota q n deu resultado
            await this.setState({ ...this.state, loading: false });
        }
    }


    async componentDidMount() {

        let documento = await axios.get(`https://sandbox-api.cbm.se.gov.br/api-digitalse/documentos/${this.props.match.params.id}`)

        documento = documento.data

        let data = new Date(documento.data)

        let doc = {
            campos: {
                nome: documento.nome,
                numeracao: documento.numeracao,
                data: (((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()),
                tipo: documento.tipo,
                descricao: documento.descricao,
                militares: documento.militares.map((mil) => {
                    return {
                        nome: "",
                        matricula: mil.matricula
                    }
                })
            },
            arquivos: documento.arquivos.map((arq) => {
                return {
                    src: `https://sandbox-api.cbm.se.gov.br/api-digitalse/documentos/${this.props.match.params.id}/arquivos/${arq.id}/arquivo`,
                    caption: arq.nome,
                    ocr: arq.texto
                }
            })
        }

        await this.setState({ documento: doc })
        this.awaitResult(true)

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
                                    <CardBody>
                                        <Card>
                                            <CardHeader>
                                                <h3>Texto Extraido</h3>
                                            </CardHeader>

                                            <div style={{ "padding": "15px", "max-width": "200px" }}>
                                                <Button disabled={this.state.loading} color="danger"> Editar Arquivo </Button>
                                            </div>

                                            <CardBody>
                                                <Input disabled
                                                    type="textarea"
                                                    name="ocr"
                                                    id="ocr"
                                                    value={this.state.documento.arquivos[this.state.carousel.activeIndex]?.ocr}
                                                    style={{ "resize": "none", "height": "390px" }} />
                                            </CardBody>

                                        </Card>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={12} xl={3}>
                        <Card className="card-default" style={{ justifyContent: "center" }}>
                            <CardHeader>
                                <h3>Informações do documento {this.state.editDoc.nome /* testar o edit doc*/}</h3>
                            </CardHeader>
                            <div style={{ "padding": "15px", "max-width": "200px" }}>
                                <Button color="danger" disabled={this.state.loading} onClick={this.toggleEditDocumento}> Editar Documento</Button>
                            </div>
                            <CardBody>
                                <div>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="nome"><h4>Nome do Documento</h4></Label>
                                                <Input
                                                    disabled={this.state.editDocumento}
                                                    style={{ minWidth: 182 }}
                                                    onChange={this.changeHandler}
                                                    name="nome"
                                                    id="nome"
                                                    value={this.state.editDocumento ? this.state.documento.campos.nome : this.state.editDoc.nome}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numeracao"><h4>Numeração do documento</h4></Label>
                                                <Input
                                                    disabled={this.state.editDocumento}
                                                    style={{ minWidth: 182 }}
                                                    onChange={this.changeHandler}
                                                    name="numeracao"
                                                    id="numeracao"
                                                    value={this.state.editDocumento ? this.state.documento.campos.numeracao : this.state.editDoc.numeracao}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <FormGroup>
                                                <Label for="data"><h4>Data</h4></Label>
                                                <Input
                                                    disabled={this.state.editDocumento}
                                                    onChange={this.changeHandler}
                                                    type={this.state.editDocumento ? "sim" : "date"}
                                                    max={new Date().toISOString().split("T")[0]}
                                                    name="data"
                                                    id="data"
                                                    value={this.state.editDocumento ? this.state.documento.campos.data : this.state.editDoc.data}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm={6}>
                                            <FormGroup>
                                                <Label for="tipo"><h4>Tipo</h4></Label>
                                                <Input
                                                    disabled={this.state.editDocumento}
                                                    type={this.state.editDocumento ? "sim" : "select"}
                                                    onChange={this.changeHandler}
                                                    name="tipo"
                                                    id="tipo"
                                                    value={this.state.editDocumento ? this.state.documento.campos.tipo : this.state.editDoc.tipo}
                                                >
                                                    <option value="bga">BGA</option>
                                                    <option value="bgo">BGO</option>
                                                    <option value="bir">BIR</option>
                                                    <option value="diario" disabled>Diário Oficial</option>
                                                    <option value="ficha" disabled>Ficha</option>
                                                    <option value="relatorio" disabled>Relatório de Processos</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="descricao"><h4>Descrição</h4></Label>
                                                <Input
                                                    disabled={this.state.editDocumento}
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
                                    <Row>
                                        <div className="ml-auto mr-auto">
                                            <Button 
                                                hidden={this.state.editDocumento} 
                                                color="danger" 
                                                onClick={this.discardChangesDocumento}
                                                > 
                                                Cancelar
                                            </Button>
                                            <Button 
                                                hidden={this.state.editDocumento} 
                                                color="success" 
                                                onClick={this.salvarDocumento}
                                                type="button"
                                                className="ml-4"
                                                > 
                                                Salvar
                                            </Button>
                                        </div>
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
Documento.propTypes = {
    match: PropTypes.node
}

export default withTranslation()(Documento);
