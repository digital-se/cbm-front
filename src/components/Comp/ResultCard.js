import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardLink, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class ResultCard extends Component {

    constructor(props) {
        super(props)
        // titulo pode ser edição ou nome completo ¯\_(ツ)_/¯
        this.nome = this.props.nome
        this.data = this.props.data
        this.tipo = this.props.tipo
        this.numeracao = this.props.numeracao
        this.militares = this.props.militares

        if (this.tipo === "diario") {
            this.url = this.props.url
        }
    }

    render() {
        if (this.tipo === "ficha") {
            return (
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Card style={{ width: "16rem", justifyContent: "center" }}>
                        <Row>
                            <Col>
                                <a
                                    href={"/ficha/" + this.num}
                                    style={{
                                        width: "16rem",
                                        justifyContent: "center",
                                        color: "#fff",
                                        cursor: "pointer",
                                    }}
                                >
                                    <CardHeader style={{ width: "16rem", alignItems: "center", justifyContent: "center", backgroundColor: "#9F75FF" }} >
                                        <Row>
                                            <div style={{ backgroundColor: "#9F75FF", width: "3rem", justifyContent: "center", alignItems: "right" }}>
                                                <em className="fa fa-address-card fa-3x"></em>
                                            </div>
                                            <div style={{ backgroundColor: "#95FF", width: "10rem", justifyContent: "center", alignItems: "left" }}>
                                                <h5> Fichas de arroz</h5>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                </a>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <Label>Tipo:</Label>
                                            <div style={{ width: "15px" }} />
                                            <Label>Data:</Label>
                                            <div style={{ width: "15px" }} />
                                            <Label>.... Militares adicionados</Label>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="descricao">Descrição</Label>
                                                <Input
                                                    disabled
                                                    type="textarea"
                                                    name="descricao"
                                                    id="descricao"
                                                    value={this.nome}
                                                    style={{
                                                        resize: "none",
                                                        height: "50px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            );

        } else if (this.tipo === "diario") {
            return (

                <a href={this.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <Card style={{ borderRadius: '10px', width: "16rem", justifyContent: "center" }}>
                        <CardHeader style={{ backgroundColor: '#20c997', color: "#fff" }}>
                            <Row >
                                <div className="col-3 d-flex align-items-center justify-content-center">
                                    <em className="fas fa-newspaper fa-3x"></em>
                                </div>

                                <div className="col-6 py-3 rounded-right">
                                    <div className="h5 mt-0">{this.nome} Diario de feijão</div>
                                    {this.data} 99/99/999
                                </div>
                            </Row>
                        </CardHeader>
                        <CardBody style={{ color: '#343a40' }}>
                            <Row>
                                <Col>
                                    <div style={{ width: "15px" }} />
                                    <Label>Tipo: {this.tipo}</Label>
                                    <div style={{ width: "15px" }} />
                                </Col>
                            </Row>
                            <Label for="descricao">Descrição</Label>
                            <Input
                                disabled
                                type="textarea"
                                value={this.tipo}
                                style={{
                                    resize: "none",
                                    height: "50px",
                                    cursor: "pointer",
                                }}
                            />
                        </CardBody>
                    </Card>
                </a >
            );
        }
    }
}

export default ResultCard