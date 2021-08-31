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
        editArq: {
            nome: "",
            descricao: "",
        },
        redirect: false,
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    next = () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === this.state.arquivo.arquivos.length - 1 ? 0 : this.state.carousel.activeIndex + 1;
        this.setState({ carousel: { activeIndex: nextIndex } })
        this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
    }

    previous = () => {
        if (this.state.carousel.animating) return;
        const nextIndex = this.state.carousel.activeIndex === 0 ? this.state.arquivo.arquivos.length - 1 : this.state.carousel.activeIndex - 1;
        this.setState({ carousel: { ...this.state.carousel, activeIndex: nextIndex } })
    }
    goToIndex = (newIndex) => {
        if (this.state.carousel.animating) return;
        this.setState({ carousel: { ...this.state.carousel, activeIndex: newIndex } })
    }

    toggleEditArquivo = async () => { //backup pra caso rejeite as alterações e recuperar os dados antigos pois serão alterados diretamente

        await this.setState({ ...this.state, editArquivo: false });
        await this.setState({ editArq: { ...this.state.editArq, nome: this.state.arquivo.campos.nome } });
        await this.setState({ editArq: { ...this.state.editArq, descricao: this.state.arquivo.campos.descricao } });

    }

    discardChangesArquivo = () => {
        this.setState({ ...this.state, editArquivo: true });
    }

    salvarArquivo = () => {
        this.setState({ ...this.state, editArquivo: true });
    }

    changeHandler = async (e) => { //alterar valores editados
        await this.setState({ editArq: { ...this.state.editArq, [e.target.name]: e.target.value } });
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
                        if (arq.id == this.props.match.params.id_arquivo){
                            this.setState({ carousel: { ...this.state.carousel, activeIndex: count }})
                        }

                        return {
                            src: (process.env.NODE_ENV == 'production' ? "https://sandbox-api.cbm.se.gov.br/api-digitalse/" : "http://localhost:8082/") + `documentos/${this.props.match.params.id_documento}/arquivos/${arq.id}/arquivo`,
                            caption: arq.nome,
                            ocr:`Devido ao grande número de reclamações, a companhia telefônica de São Petersburgo está sendo obrigada a investir pesado na melhora de seus serviços. Para isso a companhia decidiu diminuir o orçamento de alguns setores para aumentar o de outros mais essenciais. Um dos setores que terá seu orçamento reduzido é o de impressão de listas telefônicas.

                            Com um orçamento reduzido, o setor de impressão de listas telefônicas não consegue comprar toner suficiente para imprimir as listas completas. Como os números de telefone são impressos alinhados na vertical, foi sugerida a seguinte solução: a partir do segundo número de telefone impresso, os dígitos iniciais do próximo número a ser impresso que coincidirem com os do número acima são omitidos, ficando apenas um espaço em branco. Por exemplo, para os números 535456, 535488, 536566 e 835456 a impressão é a seguinte:
                            
                            
                            5 3 5 4 5 6
                                    8 8
                                6 5 6 6
                            8 3 5 4 5 6
                            
                            
                            Note que esta impressão economizou a impressão de 6 caracteres. A companhia telefonica cogitou também não imprimir os sufixos repetidos, mas nos testes feitos viram que a resposta não foi boa para o usuário e decidiram, portanto, fazer apenas a eliminação em prefixos. Para saber se a economia será suficiente, o setor de impressão quer saber o número máximo de caracteres que podem ser omitidos. No entanto, como em qualquer cidade grande, são vários os números telefônicos e eles não querem gastar homens-hora para calcular manualmente este valor. Então cabe a você, novo empregado da companhia, automatizar a economia feita pelo toner, no número de caracteres.
                            
                            Entrada
                            A entrada é composta por diversas instâncias e termina com final de arquivo (EOF). Cada caso de teste contém um inteiro N, que informa o número de telefones na lista. As próximas N (1 ≤ N ≤ 105) linhas possuem, cada uma delas, um telefone Xi, de até 200 caracteres. Para um mesmo caso de teste os números de telefone têm a mesma quantidade de caracteres. Um número de telefone pode começar com o caracter ’0’.
                            
                            Saída
                            Para cada caso de teste imprima uma linha informando o maior número possível de caracteres economizados por este processo.`,
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
                                                        name="ocr"
                                                        id="ocr"
                                                        value={this.state.arquivo.arquivos[this.state.carousel.activeIndex]?.ocr}
                                                        style={{ "resize": "none", "height": "550px" }} />
                                                    <Row>
                                                        <div className="ml-3">
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
