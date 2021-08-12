import React from 'react';
import { withTranslation } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button, FormGroup, Label } from 'reactstrap';
import { Card, CardBody, CardHeader } from 'reactstrap';
import SearchResult from '../SearchResult/SearchResult';
import 'react-datetime/css/react-datetime.css';
import { withRouter } from 'react-router-dom';

class Busca extends React.Component {

    state = {
        dropdownOpen: false,
        busca: false,
        form: {
            nome: "",
            tipo: "",
            searchString: "",
            dataInicial: "",
            dataFinal: "",
            matricula: "",
            nomeMilitar: "",
        },
        resultados: [],

    }

    changeHandler = async (e) => {
        try {
            e.target.value = e.target.value.format('DD/MM/YYYY')
        } catch (error) {
            console.log(error)
        }

        await this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
    }

    showResult = async () => {
        this.setState({
            busca: true
        });

        if (this.state.busca == true){
            await this.setState({
                busca: false
            });
            this.setState({
                busca: true
            });
            
        }
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col>
                        <Row>
                            <Col lg={12} xl={4}>
                                <Card className="card-default" style={{ justifyContent: 'center', borderRadius: '20px', "box-shadow": "#ccc", backgroundColor: "#FFF" }}>
                                    <CardHeader style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', justifyContent: 'center' }}>
                                        <h3 className="ml-2"> Busca documental</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div>
                                            <Col >
                                                <Row>
                                                    <Col sm={12}>
                                                        <FormGroup>
                                                            <Label for="nome"><h5>Nome do documento</h5></Label>
                                                            <Input
                                                                name="nome"
                                                                id="nome"
                                                                placeHolder="Insira nome do documento"
                                                                value={this.state.form.nome}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="tipo"><h5>Tipo do documento*</h5></Label>
                                                            <Input
                                                                type="select"
                                                                name="tipo"
                                                                id="tipo"
                                                                value={this.state.form.tipo}
                                                                onChange={this.changeHandler}
                                                            >
                                                                <option disabled value="">Selecione o tipo</option>
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
                                                            <Label for="numeracao"><h5>Número do documento</h5></Label>
                                                            <Input
                                                                name="numeracao"
                                                                id="numeracao"
                                                                placeHolder="Insira a numeração"
                                                                value={this.state.form.numeracao}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="dataInicial"><h5> Data inicial</h5></Label>
                                                            <Input
                                                                type="date"
                                                                name="dataInicial"
                                                                id="dataInicial"
                                                                max={new Date().toISOString().split("T")[0]}
                                                                value={this.state.form.dataInicial}
                                                                onChange={this.changeHandler} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="dataFinal"><h5> Data final</h5></Label>
                                                            <Input
                                                                type="date"
                                                                name="dataFinal"
                                                                id="dataFinal"
                                                                max={new Date().toISOString().split("T")[0]}
                                                                value={this.state.form.dataFinal}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="matricula"><h5> Matricula do militar</h5></Label>
                                                            <Input
                                                                name="matricula"
                                                                id="matricula"
                                                                placeHolder="Insira a matricula"
                                                                value={this.state.form.matricula}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <FormGroup>
                                                            <Label for="nomeMilitar"><h5>Nome do militar</h5></Label>
                                                            <Input
                                                                name="nomeMilitar"
                                                                id="nomeMilitar"
                                                                placeHolder="Insira o nome"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12}>
                                                        <FormGroup>
                                                            <Label for="palavrasChave"><h5>Palavras-chave</h5></Label>
                                                            <Input
                                                                name="palavrasChave"
                                                                id="palavrasChave"
                                                                placeHolder="Insira as palavras-chave"
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
                                    <SearchResult 
                                    values={this.state.form}/>
                                    :
                                    <p>Os resultados aparecerão aqui :)</p>
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