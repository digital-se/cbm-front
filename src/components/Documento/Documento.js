import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button, FormGroup, Label } from 'reactstrap';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Carousel, CarouselItem } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import Swal from '../Comp/Swal';
import api from "../../modules/api"
import { withKeycloak } from '@react-keycloak/web';

class Documento extends React.Component {

    state = {
        dropdownOpen: false,
        documento: {
            id: "",
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
        },
        loading: true,
        redirect: false
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

    changeHandler = async (e) => { //alterar valores editados
        await this.setState({ editDoc: { ...this.state.editDoc, [e.target.name]: e.target.value } });
    }

    awaitResult = async (q) => {
        if (q == true) { //talvez se for false bota q n deu resultado
            await this.setState({ ...this.state, loading: false });
        }
    }

    async componentDidMount() {
        try {
            if(this.props.keycloak.token == undefined) {
                this.props.keycloak.token = null;
            }
            console.log(this.props.keycloak.token)

            let documento = null;
            if (this.props.keycloak.token != undefined) {
                documento = await api.get(`documentos/${this.props.match.params.id_documento}`,
                {
                    headers: {
                        "Authorization": `Bearer ${this.props.keycloak.token}`
                    }
                });
            } else{
                documento = await api.get(`documentos/${this.props.match.params.id_documento}`);
                console.log("Não logado")
            }
            
            documento = documento.data
            let data = new Date(documento.data).toISOString().split("T")[0]
            let doc = {
                id: documento.id,
                campos: {
                    nome: documento.nome,
                    numeracao: documento.numeracao,
                    data: data,
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
                        src: (process.env.NODE_ENV == 'production' ? "https://sandbox-api.cbm.se.gov.br/api-digitalse/" : "http://localhost:8082/") + `documentos/${this.props.match.params.id_documento}/arquivos/${arq.id}/arquivo`,
                        caption: arq.nome,
                        ocr: arq.texto,
                        id: arq.id
                    }
                })
            }

            await this.setState({ documento: doc })
            this.awaitResult(true)

        } catch (e) {
            alert("Acesso inválido")
            this.setState({ redirect: true })
        }
    }

    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to="/inicio" />
            );
        } else {
            return (
                <ContentWrapper>
                    <Row >
                        <Col >
                            <Card className="card-default" style={{ justifyContent: 'center', height: "625px" }}>
                                <Row>
                                    <Col>
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
                                                                <img src={item.src} alt={item.caption} style={{ alignmentAdjust: "auto", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", maxHeight: "350px" }} />
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
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={12} lg={5}>
                            <Card className="card-default" style={{ justifyContent: 'center', height: "625px" }}>
                                <CardHeader>
                                    <h3>Texto Extraido</h3>
                                </CardHeader>
                                <div style={{ "padding": "15px", "max-width": "200px" }}>
                                <Link to={`/documentos/${this.state.documento.id}/arquivos/${this.state.documento.arquivos[this.state.carousel.activeIndex]?.id}/editar`}>
                                    <Button
                                        disabled={this.state.loading}
                                        color="danger">
                                        <em className="fa mr-2 fas fa-pencil-alt " />Editar Arquivo
                                    </Button >
                                </Link>
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
                        </Col>
                        <Col sm={12} lg={3}>
                            <Card className="card-default" style={{ justifyContent: "center" }}>
                                <CardHeader>
                                    <h3>Informações adicionais</h3>
                                </CardHeader>
                                <div style={{ "padding": "15px", "max-width": "200px" }}>
                                    <Link to={`/documentos/${this.state.documento.id}/editar`}>
                                        <Button
                                            color="danger"
                                            disabled={this.state.loading}>
                                            <em className="fa mr-2 fas fa-pencil-alt " />Editar Documento
                                        </Button>
                                    </Link>
                                </div>
                                <CardBody>
                                    <div>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="nome"><h4>Nome do Documento</h4></Label>
                                                    <Input
                                                        disabled
                                                        style={{ minWidth: 182 }}
                                                        onChange={this.changeHandler}
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
                                                        onChange={this.changeHandler}
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
                                                        onChange={this.changeHandler}
                                                        type="text"
                                                        max={new Date().toISOString().split("T")[0]}
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
                                                        type={this.state.editDocumento ? "sim" : "select"}
                                                        onChange={this.changeHandler}
                                                        name="tipo"
                                                        id="tipo"
                                                        value={this.state.documento.campos.tipo}
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
                                                        return (<ListGroupItem key={index}>{item.matricula}</ListGroupItem>)
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
}
Documento.propTypes = {
    match: PropTypes.node,
    keycloak: PropTypes.object
}

export default withKeycloak(Documento);
