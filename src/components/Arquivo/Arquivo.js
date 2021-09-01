import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Carousel, CarouselItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Swal from '../Comp/Swal';
// import axios from "axios"
import api from "../../modules/api"
import { withKeycloak } from '@react-keycloak/web';

class Arquivo extends React.Component {

    state = {
        dropdownOpen: false,
        arquivo: {
            id: "",
            campos: {
                nome: "",
            },
            arquivos: []
        },
        carousel: {
            activeIndex: 0,
            animating: false
        },
        loading: true,
        editArquivo: true,
        redirect: false,
        edited: {
            text:""
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    next = async () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === this.state.arquivo.arquivos.length - 1 ? 0 : this.state.carousel.activeIndex + 1;
        this.setState({ carousel: { activeIndex: nextIndex } })
        await this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
        this.setState({ ...this.state, editArquivo: true });
    }

    previous = async() => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === 0 ? this.state.arquivo.arquivos.length - 1 : this.state.carousel.activeIndex - 1;
        await this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
        this.setState({ ...this.state, editArquivo: true });
    }
    goToIndex = async (newIndex) => {
        if (this.state.carousel.animating) return;
        await this.setState({ carousel: { ...this.state.carousel, activeIndex: newIndex } })
        this.setState({ ...this.state, editArquivo: true });
    }

    toggleEditArquivo = async () => { //backup pra caso rejeite as alterações e recuperar os dados antigos pois serão alterados diretamente
        await this.setState({ ...this.state, editArquivo: false });
        this.setState({ edited: { ...this.state.edited, text  : this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.ocr } });
    }

    discardChangesArquivo = async () => {
        console.log(this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.ocr)
        await this.setState({ edited: { ...this.state.edited, text  : this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.ocr } });
        await this.setState({ ...this.state, editArquivo: true });
        
        
        console.log(this.state.edited.text)
    }

    salvarArquivo = async () => {
        try{
            await api.put(`documentos/${this.props.match.params.id_documento}/arquivos/${this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.id}`, {
                text: this.state.edited.text
            }, {
                headers: {
                    "Authorization": `Bearer ${this.props.keycloak.token}`
                }
            })
            console.log(this.state.edited)
            this.setState({ ...this.state, editArquivo: true });

            let arquivos = [...this.state.arquivo.arquivos];
            let arquivoAtual = {...arquivos[this.state.carousel.activeIndex]};
            arquivoAtual.ocr = this.state.edited.text;
            arquivos[this.state.carousel.activeIndex] = arquivoAtual;
            this.setState({ arquivo: {...this.state.arquivo, arquivos: arquivos}})
            
        }catch(e){
            console.log(e)
        }
    }

    changeHandler = async (e) => { //alterar valores editados
        await this.setState({ edited: { ...this.state.edited, text  : e.target.value } });
    }

    awaitResult = async (q) => {
        if (q == true) { //talvez se for false bota q n deu resultado
            await this.setState({ ...this.state, loading: false });
        }
    }

    async componentDidMount() {
        try {
            let documento = await api.get(`documentos/${this.props.match.params.id_documento}`,
                {
                    headers: {
                        "Authorization": `Bearer ${this.props.keycloak.token}`
                    }
                });

                documento = documento.data
                var count = -1;
                let doc = {  
                    campos: {
                        nome: documento.nome,
                    },
                    arquivos: documento.arquivos.map((arq) => {
                        count = count + 1;
                        if(arq.text == undefined){
                            arq.text = ""
                        }
                        if (arq.id == this.props.match.params.id_arquivo){
                            this.setState({ carousel: { ...this.state.carousel, activeIndex: count }})
                            //this.setState({ edited: { ...this.state.edited, text: arq.text }})
                        }
                        
                        return {
                            src: (process.env.NODE_ENV == 'production' ? "https://sandbox-api.cbm.se.gov.br/api-digitalse/" : "http://localhost:8082/") + `documentos/${this.props.match.params.id_documento}/arquivos/${arq.id}/arquivo`,
                            caption: arq.nome,
                            ocr: arq.text,
                            id: arq.id
                        }    
                    })
                }
    
            await this.setState({ arquivo: doc })
            this.awaitResult(true)

        } catch (e) {
            console.log(e)
            alert("Arquivo inexistente")
            await this.setState({ redirect: true })
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
                    <Row>
                        <Col>
                            <Card className="card-default" style={{ justifyContent: 'center' }}>
                                <Row>
                                    <Col sm={12} lg={8}>
                                        <CardHeader style={{ textAlign: 'center' }}>
                                            <h3>{this.state.arquivo.campos.nome}</h3>
                                        </CardHeader>
                                        <CardBody style={{ "resize": "none" }}>
                                            <h4 style={{ textAlign: "center", backgroundColor: "#ebebeb", borderRadius: "5px", margin: "16px", padding: "12px", fontWeight: "bold" }}>{this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.caption}</h4>
                                            <Carousel
                                                activeIndex={this.state.carousel.activeIndex}
                                                next={this.next}
                                                previous={this.previous}
                                                interval={false}
                                                style={{ minHeight: "650px" }}
                                            >
                                                {this.state.arquivo.arquivos.map((item) => {
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
                                                                <img src={item.src} alt={item.caption} style={{ alignmentAdjust: "auto", maxWidth: "100%", maxHeight: "550px" }} />
                                                            </Swal>
                                                        </CarouselItem>
                                                    );
                                                })}
                                            </Carousel>
                                            <Pagination aria-label="Page navigation example" className="d-flex justify-content-center">
                                                <PaginationItem>
                                                    <PaginationLink previous onClick={this.previous} />
                                                </PaginationItem>
                                                {this.state.arquivo.arquivos.map((item, index) => {
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
                                                    <Button
                                                        onClick={this.toggleEditArquivo}
                                                        disabled={this.state.loading}
                                                        color="danger">
                                                        <em className="fa mr-2 fas fa-pencil-alt " />Editar Texto
                                                    </Button >
                                                </div>
                                                <CardBody>
                                                    <Input 
                                                        disabled = {this.state.editArquivo}
                                                        type="textarea"
                                                        name="text"
                                                        id="text"
                                                        onChange={this.changeHandler}
                                                        value={this.state.editArquivo?
                                                            this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.ocr 
                                                            :
                                                            this.state.edited.text}

                                                        style={{ "resize": "none", "height": "550px" }} />

                                                    <div style={{"height": "20px"}}/>
                                                    <Row>                    
                                                        <div className="ml-3" >
                                                            <Button
                                                                hidden={this.state.editArquivo}
                                                                color="danger"
                                                                onClick={this.discardChangesArquivo}
                                                                style={{ "height": "35px", "width": "99px" }}>
                                                                <em className="fa mr-2 fas fa-times" />Cancelar
                                                            </Button>
                                                            <Button
                                                                hidden={this.state.editArquivo}
                                                                color="success"
                                                                onClick={this.salvarArquivo}
                                                                type="button"
                                                                className="ml-4"
                                                                style={{ "height": "35px", "width": "99px" }}>
                                                                Salvar<em className="fa ml-2 fas fa-check" />
                                                            </Button>
                                                        </div>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </ContentWrapper >
            );
        }
    }
}
Arquivo.propTypes = {
    match: PropTypes.node,
    keycloak: PropTypes.object
}

export default withKeycloak(Arquivo);
