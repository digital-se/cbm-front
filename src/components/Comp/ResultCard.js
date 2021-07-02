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
                <Col>
                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <a href={"/ficha/" + this.num} style={{ width: '17rem', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
                            <Card style={{ width: '17rem', justifyContent: 'd-flex', alignItems: 'center'  }}>
                                <CardTitle style={{ width: '17rem', justifyContent: 'center', alignItems: 'center'}} className = 'col-9 py-6'>
                                    <Row style={{ width: '16rem', alignItems: 'center'  }}>
                                        <div style={{ backgroundColor: '#9F75FF', width: '3.5rem', alignItems:'left' }}  >
                                            <em className="fa fa-address-card fa-3x"></em>
                                        </div>
                                        <div style={{ backgroundColor: '#9FF', width: '11rem', alignItems:'right' }} >
                                            <h4>
                                                Fichas de arroz
                                            </h4>
                                        </div>
                                    </Row>
                                </CardTitle>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="descricao">Descrição</Label>
                                                <Input
                                                    disabled
                                                    type="textarea"
                                                    name="descricao"
                                                    id="descricao"
                                                    style={{ "resize": "none", "height": "50px", "cursor": "pointer" }} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </a>
                    </Row>
                </Col>

            )
            /*             return (
                            <Link to={"/ficha/" + this.num} style={{ color: '#fff' }} >
                                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ "width": "250px" }} className="card flex-row align-items-center align-items-stretch border-0">
            
                                        <div style={{ backgroundColor: '#f56e27' }} className="col-9 py-3 rounded-right" >
                                            <div className="h4 mt-0">{this.nome}</div>
                                            <div className="text-uppercase">{this.data}</div>
                                        </div>
                                    </div>
                                </Row>
                
                            </Link>
            ) */
        } else if (this.tipo === "diario") {
            return (
                <a href={this.url} target="_blank" rel="noreferrer" style={{ color: '#fff' }}>
                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ "width": "250px" }} className="card flex-row align-items-center align-items-stretch border-0">
                            <div style={{ backgroundColor: '#ca130c' }} className="col-3 d-flex align-items-center justify-content-center rounded-left">
                                <em className="fas fa-newspaper fa-3x"></em>
                            </div>
                            <div style={{ backgroundColor: '#f22d26' }} className="col-9 py-3 rounded-right">
                                <div className="h3 mt-0">{this.nome}</div>
                                <div className="text-uppercase">{this.data}</div>
                            </div>
                        </div>
                    </ Row>
                </a>
            )
        }
    }
}

export default ResultCard