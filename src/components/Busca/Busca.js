import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import { Card, CardBody, CardHeader } from 'reactstrap';
import SearchResult from '../SearchResult/SearchResult';

// DateTimePicker
import 'react-datetime/css/react-datetime.css';
// Masked Input

import { withRouter } from 'react-router-dom';

import qs from "qs";

class Busca extends React.Component {

    //vazio = todos 
    state = {
        dropdownOpen: false,
        busca: false, //qnd true exibe o search result 
        form: {
            nome: "",
            tipo: "",
            searchString: "",
            dataInicial: "",
            dataFinal: "",
            matricula: "",
            nomeMilitar: "",
        },
        resultados: []

    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    changeHandler = async (e) => {
        try {
            e.target.value = e.target.value.format('DD/MM/YYYY')
        } catch (error) {
            console.log(error)
        }

        await this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    showResult= () => { //isso é literalmente um toggle pra exibir ShowResult kkkkk 
        this.setState({
            busca: !this.state.busca
        });
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col>
                        <Row>
                            <Col lg={12} xl={4}>
                                <Card className="card-default" style={{ justifyContent: 'center' }}>
                                    <CardHeader>
                                        <h3>Busca documental</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div>
                                            <Col >
                                                <Row>
                                                    <Col sm={12}>
                                                        <FormGroup>
                                                            <Label for="nome"><h5>Insira o nome do documento</h5></Label>
                                                            <Input
                                                                name="nome"
                                                                id="nome"
                                                                value={this.state.form.nome}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="tipo"><h5>Selecione o tipo do documento*</h5></Label>
                                                            <Input
                                                                type="select"
                                                                name="tipo"
                                                                id="tipo"
                                                                value={this.state.form.tipo}
                                                                onChange={this.changeHandler}
                                                            >
                                                                <option value="">Todos</option>
                                                                <option value="bga">BGA</option>
                                                                <option value="bgo">BGO</option>
                                                                <option value="bir">BIR</option>
                                                                <option value="diario">Diário Oficial</option>
                                                                <option value="ficha" >Ficha</option>
                                                                <option value="relatorio">Relatório de Processos</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="numeracao"><h5>Insira o número do documento</h5></Label>
                                                            <Input
                                                                name="numeracao"
                                                                id="numeracao"
                                                                value={this.state.form.numeracao}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="dataInicial"><h5> Insira a data inicial</h5></Label>
                                                            <Input
                                                                type="date"
                                                                name="dataInicial"
                                                                id="dataInicial"
                                                                max="2021-07-01" //maximo deve ser a data atual - ALTERAR
                                                                value={this.state.form.dataInicial}
                                                                onChange={this.changeHandler} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="dataFinal"><h5> Insira a data final</h5></Label>
                                                            <Input
                                                                type="date"
                                                                name="dataFinal"
                                                                id="dataFinal"
                                                                max="2021-07-01" //maximo deve ser a data atual - ALTERAR
                                                                value={this.state.form.dataFinal}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="matricula"><h5> Insira a matricula do militar</h5></Label>
                                                            <Input
                                                                name="matricula"
                                                                id="matricula"
                                                                value={this.state.form.matricula}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="nomeMilitar"><h5>Insira o nome do militar</h5></Label>
                                                            <Input
                                                                name="nomeMilitar"
                                                                id="nomeMilitar"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <FormGroup>
                                                            <Label for="palavrasChave"><h5>Insira as palavras-chave</h5></Label>
                                                            <Input
                                                                name="palavrasChave"
                                                                id="palavrasChave"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm={12}>
                                                <Button
                                                    type="button"
                                                    color="success"
                                                    style={{ "height": "35px", "float": "right" }}
                                                    onClick={this.showResult}>
                                                    <em className="fa mr-2 fas fa-search" />Buscar
                                                </Button>
                                            </Col>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            
                            <Col>
                            
                            {this.state.busca ? 
                            <SearchResult/>
                            :
                            <p>kkk sim</p>
                            }
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentWrapper >
        )
    }
}

export default withTranslation()(withRouter(Busca));