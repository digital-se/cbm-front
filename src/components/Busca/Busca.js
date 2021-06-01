import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// Masked Input
import MaskedInput from 'react-input-mask'

import { withRouter } from 'react-router-dom';

import qs from "qs";

class Busca extends React.Component {

    state = {
        dropdownOpen: false,
        form: {
            tipo: "all",
            searchString: "",
            dataInicial: "",
            dataFinal: "",
            validation: {
                tipo: false,
                searchString: false,
                dataInicial: false,
                dataFinal: false,
                validation: false
            }
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

    changeHandler = async (e) => {
        try {
            e.target.value = e.target.value.format('DD/MM/YYYY')
        } catch (error) {
            console.log(error)
        }
        console.log("changeHandler")
        console.log(e)
        console.log(this.state)
        await this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
        this.validateTeste();
    }

    validateTeste = async () => {

        if (this.state.form.tipo === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, tipo: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.validation, tipo: true } } });
        }
        if (this.state.form.searchString === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, searchString: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, searchString: true } } });
        }
        if (this.state.form.dataInicial === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, dataInicial: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, dataInicial: true } } });
        }
        if (this.state.form.dataFinal === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, dataFinal: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, dataFinal: true } } });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let tipo = this.state.form.validation.tipo
        let searchString = this.state.form.validation.searchString
        let dataInicial = this.state.form.validation.dataInicial
        let dataFinal = this.state.form.validation.dataFinal

        if (tipo && searchString && dataInicial && dataFinal) {
            let form = Object.assign({}, this.state.form);
            delete form.validation
            let query = qs.stringify(form)
            this.props.history.push('/searchResult?' + query);
        }
    }

    componentDidMount() {
        this.validateTeste()
    }

    renderInput(props) {
        return (
            <>
                <MaskedInput {...props} className="form-control" mask="99/99/9999" maskChar="" name="expiry" placeholder="dd/mm/aaaa" style={{ minWidth: 182 }}>
                    {(inputProps) => <Input {...inputProps} />}
                </MaskedInput>
                <FormFeedback valid>Tudo Ok</FormFeedback>
                <FormFeedback>Campo Obrigatório</FormFeedback>
            </>
        );
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        <h2>Busca Documental</h2>
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
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <Row >
                                <Col className="text-center">
                                    <FormGroup>
                                        <Label for="exampleSelect">Tipo de Documento*</Label>
                                        <Input
                                            type="select"
                                            name="tipo"
                                            id="tipo"
                                            value={this.state.form.tipo}
                                            valid={this.state.form.validation.tipo}
                                            invalid={!this.state.form.validation.tipo}
                                            onChange={this.changeHandler}
                                        >
                                            <option value="all">Todos</option>
                                            <option value="fichas">Fichas</option>
                                            <option value="diario">Diário Oficial</option>
                                        </Input>
                                        <FormFeedback valid>Tudo Ok</FormFeedback>
                                        <FormFeedback>Campo Obrigatório</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col className="text-center">
                                    <FormGroup>
                                        <Label for="searchString">Valor de busca*</Label>
                                        <Input
                                            placeholder="digite aqui ..."
                                            name="searchString"
                                            id="searchString"
                                            valid={this.state.form.validation.searchString}
                                            invalid={!this.state.form.validation.searchString}
                                            value={this.state.form.searchString} onChange={this.changeHandler}
                                        />
                                        <FormFeedback valid>Tudo Ok</FormFeedback>
                                        <FormFeedback>Campo Obrigatório</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col className="text-center" >
                                    <FormGroup>
                                        <Label for="dataInicial">Data inicial*</Label>
                                        <Datetime
                                            dateFormat="DD-MM-YYYY"
                                            timeFormat={false}
                                            name="dataInicial"
                                            id="dataInicial"
                                            value={this.state.form.dataInicial} onChange={moment => this.changeHandler({ target: { name: "dataInicial", value: moment } })}
                                            inputProps={{ valid: this.state.form.validation.dataInicial, invalid: !this.state.form.validation.dataInicial, value: this.state.form.dataInicial, autocomplete: "off" }}
                                            renderInput={this.renderInput}
                                        />
                                        <FormFeedback valid>Tudo Ok</FormFeedback>
                                        <FormFeedback>Campo Obrigatório</FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col className="text-center">
                                    <FormGroup>
                                        <Label for="dataFinal">Data final*</Label>
                                        <Datetime
                                            dateFormat="DD-MM-YYYY"
                                            timeFormat={false}
                                            name="dataFinal"
                                            id="dataFinal"
                                            value={this.state.form.dataFinal} onChange={moment => this.changeHandler({ target: { name: "dataFinal", value: moment } })}
                                            inputProps={{ valid: this.state.form.validation.dataFinal, invalid: !this.state.form.validation.dataFinal, value: this.state.form.dataFinal, autocomplete: "off" }}
                                            renderInput={this.renderInput}
                                        />
                                        <FormFeedback valid>Tudo Ok</FormFeedback>
                                        <FormFeedback>Campo Obrigatório</FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button color="danger" type="submit">Buscar&nbsp;&nbsp;<em className="icon-magnifier" /></Button>{' '}
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </ContentWrapper>
        );
    }
}

export default withTranslation()(withRouter(Busca));