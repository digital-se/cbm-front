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
        busca: [{ nome: "João Pedro Nimuendaju Santana Santos", matricula: "12345678T" }, { nome: "c", matricula: "d" }, { nome: "e", matricula: "f" }],
        militares: [],
        files: []
    };

    changeHandler = async (e) => {
        try {
            e.target.value = e.target.value.format('YYYY-MM-DD')
        } catch (error) {
            console.log(error)
        }
        console.log("changeHandler")
        console.log(e)
        console.log(this.state)
        await this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
    }

    toggleStep = activeStep => () => {
        if (this.state.activeStep !== activeStep) {
            this.setState({
                activeStep
            });
        }
    };

    done = () => {
        alert('cavalo');
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

    onSubmit = (e) => {
        e.preventDefault()
    }

    cleanMilitares = async () => {
        await this.setState({ militares: [] })
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center container container-table">
                <Form onSubmit={this.onSubmit}>
                    <div style={{ "height": "25px" }} />
                    <Card style={{ "height": "830px", borderRadius: '20px', "box-shadow": "#ccc", backgroundColor: "#FFF" }} class="shadow-lg p-3 mb-5 bg-white rounded ">
                        <CardHeader><h3>Cadastro de documentos</h3></CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={12} lg={4} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Nav pills vertical={true} >
                                        <Row>
                                            <Col sm={6} lg={12}>
                                                <NavItem >
                                                    <Button
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '1'
                                                        })}
                                                        onClick={this.toggleStep('1')}
                                                        style={{ borderRadius: '15px', border: '2px solid' }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.8rem" }} className="text-center my-3">Dados iniciais</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }}></div>
                                                </NavItem>
                                            </Col>
                                            <Col sm={6} lg={12}>
                                                <NavItem >
                                                    <Button
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '2'
                                                        })}
                                                        onClick={this.toggleStep('2')}
                                                        style={{ borderRadius: '15px', border: '2px solid' }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.7rem" }} className="text-center my-3">Edição</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }}></div>
                                                </NavItem>
                                            </Col>
                                            <Col sm={6} lg={12}>
                                                <NavItem >
                                                    <Button
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '3'
                                                        })}
                                                        onClick={this.toggleStep('3')}
                                                        style={{ borderRadius: '15px', border: '2px solid' }}
                                                        block
                                                    >
                                                        <h4 style={{ "font-size": "1.7rem" }} className=" text-center my-3">Arquivos</h4>
                                                    </Button>
                                                    <div style={{ "height": "25px" }}></div>
                                                </NavItem>
                                            </Col>
                                            <Col sm={6} lg={12}>
                                                <NavItem >
                                                    <Button
                                                        outline color="danger"
                                                        tag="div"
                                                        className={classnames({
                                                            active: this.state.activeStep === '4'
                                                        })}
                                                        onClick={this.toggleStep('4')}
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
                                <div style={{ "height": "600 px", borderLeft: ' 0.1px solid' }} />
                                <Col>
                                    <div className="justify-content-center align-items-center">
                                        <TabContent activeTab={this.state.activeStep} className="border-0">
                                            <TabPane tabId="1">
                                                <div className="pt-3 mb-3">
                                                    <fieldset>
                                                        {/* <FormGroup> */}
                                                        <div className="border-bottom">
                                                            <h2>Dados Iniciais</h2>
                                                            <p className="lead">
                                                                Digite as informações essenciais do arquivo
                                                            </p>
                                                        </div> <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="nome"><h3>Nome do Documento *</h3></Label>
                                                            <Input
                                                                className="form-control"
                                                                placeholder="Insira o nome do documento"
                                                                style={{ minWidth: 182 }}
                                                                name="nome"
                                                                id="nome"
                                                                value={this.state.form.nome}
                                                                onChange={this.changeHandler}>
                                                            </Input>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="numeracao"><h3>Numeração do documento (Opcional)</h3></Label>
                                                            <Input
                                                                className="form-control"
                                                                placeholder="Ex: 123456"
                                                                style={{ minWidth: 182 }}
                                                                name="numeracao"
                                                                id="numeracao"
                                                                value={this.state.form.numeração}
                                                                onChange={this.changeHandler}>
                                                                {(inputProps) => <Input {...inputProps} />}
                                                            </Input>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="visibilidade"><h3>Quem pode ver esse documento? {this.state.form.visibilidade}</h3></Label>
                                                            <Input className="select"
                                                                type="select"
                                                                name="visibilidade"
                                                                id="visibilidade"
                                                                value={this.state.form.visibilidade}
                                                                onChange={this.changeHandler}
                                                            >
                                                                <option disabled value="">Selecione</option>
                                                                <option value={true}>Todos</option>
                                                                <option value={false}>Pessoas autorizadas</option>
                                                            </Input>
                                                        </FormGroup>
                                                        {/* </FormGroup> */}
                                                    </fieldset>
                                                </div>
                                                <hr />
                                                <div className="d-flex">
                                                    <Button color="danger" href="#/" onClick={window.location.href}>
                                                        Voltar
                                                    </Button>
                                                    <Button
                                                        className="ml-auto"
                                                        color="success"
                                                        onClick={this.toggleStep('2')}
                                                    >
                                                        Avançar
                                                    </Button>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <div className="pt-3 mb-3">
                                                    <fieldset>
                                                        {/* <h2>Edição</h2>
                                                        <p className="lead">
                                                            Informações do documento
                                                        </p>
                                                        <hr /> */}
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
                                                                value={this.state.form.tipo}
                                                                onChange={this.changeHandler}
                                                            >
                                                                <option disabled value="">Escolha o tipo</option>
                                                                <option value="bga">BGA</option>
                                                                <option value="bgo">BGO</option>
                                                                <option value="bir">BIR</option>
                                                                <option value="diario">Diário Oficial</option>
                                                                <option value="ficha">Ficha</option>
                                                                <option value="relatorio">Relatório de Processos</option>
                                                            </Input>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="data"><h3>Data do documento*</h3></Label>
                                                            <Input
                                                                type="date"
                                                                name="data"
                                                                id="data"
                                                                max="9999-12-30"
                                                                value={this.state.form.data}
                                                                onChange={this.changeHandler}
                                                            >
                                                            </Input>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="descrição"><h3>Descrição do documento</h3></Label>
                                                            <Input
                                                                type="textarea"
                                                                name="descrição"
                                                                id="descrição"
                                                                maxlength="300"
                                                                value={this.    state.form.descrição}
                                                                onChange={this.changeHandler}
                                                                style={{ "height": "100px", minHeight: "90px", maxHeight: "150px", resize: "vertical" }}
                                                            />
                                                        </FormGroup>
                                                    </fieldset>
                                                </div>
                                                <hr />
                                                <div className="d-flex">
                                                    <Button color="danger" onClick={this.toggleStep('1')}>
                                                        Voltar
                                                    </Button>
                                                    <Button
                                                        className="ml-auto"
                                                        color="success"
                                                        onClick={this.toggleStep('3')}
                                                    >
                                                        Avançar
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
                                                    <Button color="danger" onClick={this.toggleStep('2')}>
                                                        Voltar
                                                    </Button>
                                                    <Button
                                                        className="ml-auto"
                                                        color="success"
                                                        onClick={this.toggleStep('4')}
                                                    >
                                                        Avançar
                                                    </Button>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="4">
                                                <div className="pt-3 mb-3">
                                                    <fieldset>
                                                        <h2>Militares</h2>
                                                        <p className="lead">
                                                            Adicione os militares que estão ligados ao documento
                                                        </p>
                                                        <hr />
                                                        <div style={{ "height": "25px" }} />
                                                        <FormGroup>
                                                            <Label for="typeBusca"><h3>Busca por nome ou matrícula de militares</h3></Label>
                                                            <Input className="form-control"
                                                                type="select"
                                                                name="typeBusca"
                                                                id="typeBusca"
                                                                value={this.state.form.typeBusca}
                                                                onChange={this.changeHandler}
                                                            >
                                                                <option disabled value="">Tipo da busca</option>
                                                                <option value="nome">Nome</option>
                                                                <option value="matrícula">Matrícula</option>
                                                            </Input>
                                                        </FormGroup>
                                                        <div style={{ "height": "25px" }} />
                                                        <Card>
                                                            <FormGroup >
                                                                <Label for="matricula"><h3>Buscar {this.state.form.typeBusca}</h3></Label>
                                                                <Row>
                                                                    <Col sm={8}>
                                                                        <Input
                                                                            className="form-control"
                                                                            placeholder={this.state.form.typeBusca}
                                                                            name="matricula"
                                                                            id="matricula"
                                                                            value={this.state.form.matricula}//busca 
                                                                            onChange={this.changeHandler}
                                                                        >
                                                                        </Input>
                                                                    </Col>
                                                                    <Col sm={2}>
                                                                        <Button
                                                                            className="ml-2"
                                                                            onClick={this.addMilitares} //busca
                                                                            color="success"
                                                                            style={{ "height": "35px" }}
                                                                        >
                                                                            Buscar
                                                                        </Button>
                                                                    </Col>
                                                                    {/* <Col sm={2}>
                                                                        <Button
                                                                            className="ml-2"
                                                                            onClick={this.cleanMatricula}
                                                                            color="danger"
                                                                            style={{ "height": "35px" }}
                                                                        >
                                                                            Limpar
                                                                        </Button>
                                                                    </Col> */}
                                                                </Row>
                                                            </FormGroup>
                                                        </Card>
                                                    </fieldset>
                                                    {/* <div>
                                                            <ul>
                                                                {this.state.militares.map((value, index) =>
                                                                    <li key={index}>{value}</li>)
                                                                }
                                                            </ul>
                                                        </div> */}
                                                    <Row>
                                                        <Col className="mt-3">
                                                            {this.state.busca.length > 0 ?
                                                                (<div style={{ "maxHeight": "250px", "overflow": "auto" }}>
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
                                                                (<div style={{ "maxHeight": "250px", "overflow": "auto" }}>
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
                                                    <Button color="danger" onClick={this.toggleStep('3')}>
                                                        Voltar
                                                    </Button>
                                                    <Button
                                                        className="ml-auto"
                                                        type="submit"
                                                        color="success"
                                                        onClick={this.done} //fazer oq?
                                                    >
                                                        Cadastrar
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
            </div>
        );
    }
}

export default Cadastro;
