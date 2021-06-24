import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import {
    Card,
    CardHeader,
    CardBody,
    CardGroup,
    CardTitle,
    CardLink,
    CardFooter,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    ButtonGroup,
    Row,
    Col,
    Table
} from 'reactstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import classnames from 'classnames';
import { thresholdFreedmanDiaconis } from 'd3';

import Swal from '../Comp/Swal';

const stepNavitemStyle = {
    backgroundColor: '#fcfcfc' //padronization
};

class Cadastro extends Component {
    state = {
        activeStep: '1',
        form: {
            nome: "",
            numeracao: "",
            visibilidade: "",
            tipo: "",
            data: "",
            descrição: "",
            matricula: "",
            typeBusca: "",
            valorBusca: "",
        },
        fullValidate: false,
        allValid: false,
        validation: {
            nome: false,
            visibilidade: false,
            tipo: false,
            data: false,
            descrição: false,
        },
        busca: [{ nome: "João Pedro Nimuendaju Santana Santos", matricula: "12345678T" }, { nome: "c", matricula: "d" }, { nome: "e", matricula: "f" }],
        militares: [],
        files: []
    };

    validate = async () => {
        await this.setState({ allValid: true });

        if (this.state.form.nome.length < 3) {
            await this.setState({ allValid: false, validation: { ...this.state.validation, nome: false } });
        } else {
            await this.setState({ validation: { ...this.state.validation, nome: true } });
        }

        if (this.state.form.visibilidade === "") {
            await this.setState({ allValid: false, validation: { ...this.state.validation, visibilidade: false } });
        } else {
            await this.setState({ validation: { ...this.state.validation, visibilidade: true } });
        }

        if (this.state.form.tipo === "") {
            await this.setState({ allValid: false, validation: { ...this.state.validation, tipo: false } });
        } else {
            await this.setState({ validation: { ...this.state.validation, tipo: true } });
        }

        if (this.state.form.data.length != 10) {
            await this.setState({ allValid: false, validation: { ...this.state.validation, data: false } });
        } else {
            await this.setState({ validation: { ...this.state.validation, data: true } });
        }

        if (this.state.form.descrição.length <= 10) {
            await this.setState({ allValid: false, validation: { ...this.state.validation, descrição: false } });
        } else {
            await this.setState({ validation: { ...this.state.validation, descrição: true } });
        }
    }

    changeHandler = async (e) => {
        // try {
        //     e.target.value = e.target.value.format('YYYY-MM-DD')
        // } catch (error) {
        //     console.log(error)
        // }
        await this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
        console.log(this.state)
        await this.validate();
    }

    toggleStep = async (activeStep) => {
        if (this.state.activeStep !== activeStep) {
            this.setState({
                activeStep
            });
        }
    };

    onDrop = acceptedFiles => {
        this.setState(
            {
                files: [
                    ...this.state.files,
                    ...acceptedFiles.map(file =>
                        Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        })
                    )
                ]
            });
    };

    createImageItem = (file, index) => (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{file.name}</td>
            <td>
                <Swal options={{
                    imageUrl: file.preview,
                    //imageHeight: 1500,
                    width: "80%",
                    imageAlt: 'Carregando...',
                    showConfirmButton: false,
                    showCloseButton: true
                }} className="btn m-0 p-0">
                    <Button color="primary">a</Button>
                </Swal>
                <Button color="danger">b</Button>
                <Button color="warning">c</Button>
                <Button color="secondary">d</Button>
            </td>
        </tr>
    )

    createBuscaItem = (militar, index) => (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{militar.nome}</td>
            <td>{militar.matricula}</td>
            <td>
                <Button color="success" onClick={() => this.addMilitar(militar, index)}>+</Button>
            </td>
        </tr>
    )

    createMilitarItem = (militar, index) => (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{militar.nome}</td>
            <td>{militar.matricula}</td>
            <td>
                <Button color="danger" onClick={() => this.removeMilitar(index)}>-</Button>
            </td>
        </tr>
    )

    removeMilitar = async (index) => {
        this.state.militares.splice(index, 1)
        await this.setState({ militares: this.state.militares })
    }

    addMilitar = async (militar, index) => {
        this.state.militares.push(militar)
        this.state.busca.splice(index, 1)
        await this.setState({ militares: this.state.militares, busca: this.state.busca })
    }

    selectedFiles = () => {
        return (
            <span>{this.state.files.length} selecionados.</span>
        )
    }

    addMilitares = async () => {
        await this.setState({ militares: [...this.state.militares, this.state.form.matricula] });
        console.log(this.state.militares);
    }

    onSubmit = async (e) => {
        e.preventDefault();

        await this.setState({ fullValidate: true });

        await this.validate()

        if (!this.state.allValid) return await this.toggleStep('1');

        alert("cadastrado com sucesso")

    }

    cleanMilitares = async () => {
        await this.setState({ militares: [] })
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center container container-table pt-4">
                <Form onSubmit={this.onSubmit}>
                    <Card style={{ borderRadius: '20px', "box-shadow": "#ccc", backgroundColor: "#FFF" }} class="shadow-lg p-3 mb-5 bg-white rounded ">
                        <CardHeader><h3>Cadastro de documentos</h3></CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={12} lg={4} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Nav pills vertical={true} >
                                        <Row>
                                            <Col sm={6} lg={10}>
                                                <NavItem >
                                                    <Button
                                                        type="button"
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '1'
                                                        })}
                                                        onClick={() => this.toggleStep('1')}
                                                        style={{ borderRadius: '15px', border: '2px solid' }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.8rem" }} className="text-center my-3">Dados iniciais</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }}></div>
                                                </NavItem>
                                            </Col>
                                            <Col sm={6} lg={10}>
                                                <NavItem >
                                                    <Button
                                                        type="button"
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '2'
                                                        })}
                                                        onClick={() => this.toggleStep('2')}
                                                        style={{ borderRadius: '15px', border: '2px solid' }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.7rem" }} className="text-center my-3">Edição</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }}></div>
                                                </NavItem>
                                            </Col>
                                            <Col sm={6} lg={10}>
                                                <NavItem >
                                                    <Button
                                                        type="button"
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '3'
                                                        })}
                                                        onClick={() => this.toggleStep('3')}
                                                        style={{ borderRadius: '15px', border: '2px solid' }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.7rem" }} className=" text-center my-3">Arquivos</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }}></div>
                                                </NavItem>
                                            </Col>
                                            <Col sm={6} lg={10}>
                                                <NavItem >
                                                    <Button
                                                        type="button"
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '4'
                                                        })}
                                                        onClick={() => this.toggleStep('4')}
                                                        style={{ borderRadius: '15px', border: '2px solid', }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.7rem" }} className="text-center my-3">Militares</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }} />
                                                </NavItem>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Col>
                                {/*linha vertical*/}
                                <div style={{ borderWidth: '1 px', borderLeft: ' 0.1px solid' }} />
                                <Col>
                                    <div className="justify-content-center align-items-center">
                                        <TabContent activeTab={this.state.activeStep} className="border-0">
                                            <TabPane tabId="1">
                                                <div className="pt-3 mb-3">
                                                    <fieldset>
                                                        <div className="border-bottom">
                                                            <h2>Dados Iniciais</h2>
                                                            <p className="lead">
                                                                Digite as informações essenciais do arquivo
                                                            </p>
                                                        </div>
                                                        <div style={{ "height": "25px" }} />

                                                        <FormGroup>
                                                            <Label for="nome"><h3>Nome do Documento *</h3></Label>
                                                            <Input

                                                                className="form-control"
                                                                placeholder="Insira o nome do documento"
                                                                style={{ backgroundColor: "#E6E8EB", minWidth: 182 }}
                                                                name="nome"
                                                                id="nome"
                                                                value={this.state.form.nome}
                                                                onChange={this.changeHandler}
                                                                valid={(this.state.form.nome != "" && this.state.validation.nome)}
                                                                invalid={((this.state.form.nome != "" || this.state.fullValidate) && !this.state.validation.nome)}
                                                            />
                                                            <span className="invalid-feedback">Insira um nome válido</span>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="numeracao"><h3>Numeração do documento (Opcional)</h3></Label>
                                                            <Input
                                                                className="form-control"
                                                                placeholder="Ex: 123456"
                                                                style={{ backgroundColor: "#E6E8EB", minWidth: 182 }}
                                                                name="numeracao"
                                                                id="numeracao"
                                                                value={this.state.form.numeracao}
                                                                onChange={this.changeHandler}
                                                                valid={(this.state.form.numeracao.length > 0)}
                                                            />
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="visibilidade"><h3>Quem pode ver esse documento?</h3></Label>
                                                            <Input className="select"
                                                                type="select"
                                                                style={{ backgroundColor: "#E6E8EB" }}
                                                                name="visibilidade"
                                                                id="visibilidade"
                                                                value={this.state.form.visibilidade}
                                                                onChange={this.changeHandler}
                                                                valid={(this.state.validation.visibilidade)}
                                                                invalid={((this.state.form.visibilidade != "" || this.state.fullValidate) && !this.state.validation.visibilidade)}
                                                            >
                                                                <option hidden disabled value="">Selecione</option>
                                                                <option value={true}>Todos</option>
                                                                <option value={false}>Pessoas autorizadas</option>
                                                            </Input>
                                                            <span className="invalid-feedback">Selecione a visibilidade do documento</span>
                                                        </FormGroup>
                                                    </fieldset>
                                                </div>
                                                <hr />
                                                <div className="d-flex">
                                                    <Button type="button" color="danger" href="#/" onClick={window.location.href}>
                                                        <em className="fa mr-2 fas fa-arrow-left" />Voltar
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        className="ml-auto"
                                                        color="success"
                                                        onClick={() => this.toggleStep('2')}>
                                                        Avançar<em className="fa ml-2 fas fa-arrow-right" />

                                                    </Button>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <div className="pt-3 mb-3">
                                                    <fieldset>
                                                        <div className="border-bottom">
                                                            <h2>Edição</h2>
                                                            <p className="lead">
                                                                Digite mais informações sobre o documento
                                                            </p>
                                                        </div>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="selectTipo"><h3>Tipo de Documento*</h3></Label>
                                                            <Input
                                                                type="select"
                                                                name="tipo"
                                                                id="tipo"
                                                                style={{ backgroundColor: "#E6E8EB" }}
                                                                value={this.state.form.tipo}
                                                                onChange={this.changeHandler}
                                                                valid={(this.state.validation.tipo)}
                                                                invalid={((this.state.form.tipo != "" || this.state.fullValidate) && !this.state.validation.tipo)}
                                                            >
                                                                <option hidden disabled value="">Escolha o tipo</option>
                                                                <option value="bga">BGA</option>
                                                                <option value="bgo">BGO</option>
                                                                <option value="bir">BIR</option>
                                                                <option value="diario" disabled>Diário Oficial</option>
                                                                <option value="ficha" disabled>Ficha</option>
                                                                <option value="relatorio" disabled>Relatório de Processos</option>
                                                            </Input>
                                                            <span className="invalid-feedback">Selecione o tipo do documento</span>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="data"><h3>Data do documento*</h3></Label>
                                                            <Input
                                                                type="date"
                                                                style={{ backgroundColor: "#E6E8EB" }}
                                                                name="data"
                                                                id="data"
                                                                max="9999-12-30"
                                                                value={this.state.form.data}
                                                                onChange={this.changeHandler}
                                                                valid={(this.state.form.data != "" && this.state.validation.data)}
                                                                invalid={((this.state.form.data != "" || this.state.fullValidate) && !this.state.validation.data)}
                                                            />
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="descrição"><h3>Descrição do documento</h3></Label>
                                                            <Input
                                                                type="textarea"
                                                                name="descrição"
                                                                id="descrição"
                                                                maxlength="300"
                                                                value={this.state.form.descrição}
                                                                onChange={this.changeHandler}
                                                                style={{ "height": "100px", minHeight: "90px", maxHeight: "150px", resize: "vertical", backgroundColor: "#E6E8EB" }}
                                                                valid={(this.state.form.descrição != "" && this.state.validation.descrição)}
                                                                invalid={((this.state.form.descrição != "" || this.state.fullValidate) && !this.state.validation.descrição)}
                                                            />
                                                            <span className="invalid-feedback">Insira a descrição do documento</span>
                                                        </FormGroup>
                                                    </fieldset>
                                                </div>
                                                <hr />
                                                <div className="d-flex">
                                                    <Button type="button" color="danger" onClick={() => this.toggleStep('1')}>
                                                        <em className="fa mr-2 fas fa-arrow-left" />Voltar
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        className="ml-auto"
                                                        color="success"
                                                        onClick={() => this.toggleStep('3')}
                                                    >
                                                        Avançar<em className="fa ml-2 fas fa-arrow-right" />
                                                    </Button>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <div className="pt-3 mb-3">
                                                    <fieldset>
                                                        <h2>Arquivos</h2>
                                                        <p className="lead">
                                                            Gerencie os arquivos neste documento!
                                                        </p>
                                                        <hr />
                                                        <h3>Insira um Arquivo {this.state.files.length}</h3>
                                                        <Dropzone className="card p-3" onDrop={this.onDrop}>
                                                            <div className="text-center box-placeholder m-0" style={{ "height": "200px", borderRadius: '20px' }}>
                                                                Arraste os arquivos aqui, ou clique para seleciona-los
                                                                <p />
                                                                <em className="fa fa-file fa-3x" />
                                                            </div>
                                                        </Dropzone>
                                                        <div className="mt-3">
                                                            {this.state.files.length > 0 ?
                                                                (<div style={{ "maxHeight": "250px", "overflow": "auto" }}>
                                                                    <Table>
                                                                        <thead>
                                                                            <th>#</th>
                                                                            <th>Nome do Arquivo</th>
                                                                            <th>Ações</th>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.state.files.map(this.createImageItem)}
                                                                        </tbody>
                                                                    </Table>
                                                                </div>)
                                                                :
                                                                <div><small>Sem preview no momento.</small></div>
                                                            }
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="d-flex">
                                                    <Button type="button" color="danger" onClick={() => this.toggleStep('2')}>
                                                        <em className="fa mr-2 fas fa-arrow-left" />Voltar
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        className="ml-auto"
                                                        color="success"
                                                        onClick={() => this.toggleStep('4')}
                                                    >
                                                        Avançar<em className="fa ml-2 fas fa-arrow-right" />
                                                    </Button>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="4">
                                                <div className="pt-3 mb-3">
                                                    <fieldset className="mb-1 pb-1">
                                                        <h2>Militares</h2>
                                                        <p className="lead">
                                                            Adicione os militares que estão ligados ao documento
                                                        </p>
                                                        <hr />
                                                        <FormGroup>
                                                            <Label for="typeBusca"><h3>Busca por nome ou matrícula de militares</h3></Label>
                                                            <Input className="form-control"
                                                                type="select"
                                                                name="typeBusca"
                                                                id="typeBusca"
                                                                style={{ backgroundColor: "#E6E8EB" }}
                                                                value={this.state.form.typeBusca}
                                                                onChange={this.changeHandler}
                                                            >
                                                                <option hidden disabled value="">Tipo da busca</option>
                                                                <option value="nome">Nome</option>
                                                                <option value="matrícula">Matrícula</option>
                                                            </Input>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <div>
                                                            <FormGroup >
                                                                <Label for="matricula"><h3>Buscar {this.state.form.typeBusca}</h3></Label>
                                                                <Row>
                                                                    <Col sm={8}>
                                                                        <Input
                                                                            className="form-control"
                                                                            placeholder={this.state.form.typeBusca}
                                                                            style={{ backgroundColor: "#E6E8EB" }}
                                                                            name="matricula"
                                                                            id="matricula"
                                                                            value={this.state.form.matricula}//busca 
                                                                            onChange={this.changeHandler}
                                                                        />
                                                                    </Col>
                                                                    <Col sm={3}>
                                                                        <Button
                                                                            type="button"
                                                                            className="ml-2"
                                                                            onClick={this.addMilitares} //busca
                                                                            color="success"
                                                                            style={{ "height": "35px" }}
                                                                        >
                                                                            <em className="fa mr-2 fas fa-search" />Buscar
                                                                        </Button>
                                                                    </Col>
                                                                </Row>
                                                            </FormGroup>
                                                        </div>
                                                    </fieldset>
                                                    <Row>
                                                        <Col className="mt-3">
                                                            {this.state.busca.length > 0 ?
                                                                (<div style={{ "maxHeight": "220px", "overflow": "auto" }}>
                                                                    <Table>
                                                                        <thead>
                                                                            <th>#</th>
                                                                            <th>Nome</th>
                                                                            <th>Matricula</th>
                                                                            <th>Ações</th>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.state.busca.map(this.createBuscaItem)}
                                                                        </tbody>
                                                                    </Table>
                                                                </div>)
                                                                :
                                                                <div><small>Sem preview no momento.</small></div>
                                                            }
                                                        </Col>
                                                        <hr />
                                                        <Col className="mt-3">
                                                            {this.state.militares.length > 0 ?
                                                                (<div style={{ "maxHeight": "220px", "overflow": "auto" }}>
                                                                    <Table>
                                                                        <thead>
                                                                            <th>#</th>
                                                                            <th>Nome</th>
                                                                            <th>Matricula</th>
                                                                            <th>Ações</th>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.state.militares.map(this.createMilitarItem)}
                                                                        </tbody>
                                                                    </Table>
                                                                </div>)
                                                                :
                                                                <div><small>Sem preview no momento.</small></div>
                                                            }
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <hr />
                                                <div className="d-flex">
                                                    <Button type="button" color="danger" onClick={() => this.toggleStep('3')}>
                                                        <em className="fa mr-2 fas fa-arrow-left" />Voltar
                                                    </Button>
                                                    <Button
                                                        className="ml-auto"
                                                        type="submit"
                                                        color="success"
                                                    >
                                                        Cadastrar<em className="fa ml-2 fas fa-check" />
                                                    </Button>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Form>
            </div >
        );
    }
}

export default Cadastro;
