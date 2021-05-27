import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-input-mask'
import qs from "qs";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import ResultCard from "../Comp/ResultCard"
import UploadFiles from "../Comp/UploadFiles";

import db from "../../db/db"

import Swal from '../Comp/Swal';
import SwalDoc from '../Comp/SwalDoc';


class CadastroFoto extends React.Component {

    constructor(props, state) {
        super(props)
        this.state = {
            dropdownOpen: false,
            form: {
                tipo: "",
                numeracao: "",
                data: "",
                dataFinal: "",
                ocr: "ficha de alguem com um testo lid erado pero ocr\n\nmuto errao ese ocr",
                txt: [],
                validation: {
                    tipo: false,
                    numeracao: false,
                    data: false,
                    dataFinal: false,
                    validation: false
                }
            }
        }

        if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true })["tipo"] != undefined) {
            this.state.form["tipo"] = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })["tipo"]
        }
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
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        await this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
        console.log(this.state.form.ocr)
        this.validateTeste();
    }

    validateTeste = async () => {

        if (this.state.form.tipo === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, tipo: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.validation, tipo: true } } });
        }
        if (this.state.form.numeracao === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, numeracao: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, numeracao: true } } });
        }
        if (this.state.form.data === "") {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, data: false } } });
        } else {
            await this.setState({ form: { ...this.state.form, validation: { ...this.state.form.validation, data: true } } });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let tipo = this.state.form.validation.tipo
        let numeracao = this.state.form.validation.numeracao
        let data = this.state.form.validation.data
        let dataFinal = this.state.form.validation.dataFinal

        if (tipo && numeracao && data) {
            let form = Object.assign({}, this.state.form);
            delete form.validation
            let query = qs.stringify(form)
            this.props.history.push('/inicio?' + query);
        }
    }

    componentDidMount() {
        this.validateTeste()
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getOcr = () => {
        db.getOcr().then(resultados => {
            this.setState({ form: { ...this.state.form, txt: resultados.pages } })
        })
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
                    <div>{this.titulo} {this.state.form.tipo.toUpperCase()}</div>
                </div>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Col xl={5} md={8} className="text-center" >
                        <UploadFiles />
                    </Col>

                    <Col xl={3} md={6} className="text-center">
                        <FormGroup>
                            <Label for="numeracao">Nome*</Label>
                            <Input
                                placeholder="Nome Completo ..."
                                name="numeracao"
                                id="numeracao"
                                valid={this.state.form.validation.numeracao}
                                invalid={!this.state.form.validation.numeracao}
                                value={this.state.form.numeracao} onChange={this.changeHandler}
                            />
                            <FormFeedback valid>Tudo Ok</FormFeedback>
                            <FormFeedback>Campo Obrigatório</FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

                <Row style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Button onClick={this.getOcr} >Adicionar Foto</Button>
                </Row>
                <hr />
            </ContentWrapper>
        );
    }
}

export default withTranslation()(CadastroFoto);