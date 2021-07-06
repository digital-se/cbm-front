import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardLink, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class ResultCard extends Component {
        
    constructor(props) {
        super(props)
        this.nome = this.props.nome
        this.data = this.props.data
        this.tipo = this.props.tipo
        this.numeracao = this.props.numeracao
        this.militares = this.props.militares
        this.descricao = this.props.descricao

        
        
        if (this.tipo === "diario") {
            this.url = this.props.url
            this.color = "#7266ba"


        } else if (this.tipo === "BGA"){
            this.color = "#2f80e7"
    
        }else if (this.tipo === "BGO"){
            this.color = "#7266ba"

        }else if (this.tipo === "ficha"){
            this.color = "#D04545"
            this.url = "/ficha/" + this.numeracao
        }
        
    }

    render() {
        if (this.tipo === "ficha" || this.tipo === "diario") {
            return (
                <a 
                href={this.url}
                target="_blank" 
                rel="noreferrer"
                style={{
                    width: "16rem",
                    justifyContent: "center",
                    color: "#FFFF",
                    cursor: "pointer",
                    textDecoration: 'none' 
                }}>
                    <Card style={{ borderRadius: '10px', width: "16rem", justifyContent: "center" }}>
                        <CardHeader style={{ backgroundColor: this.color, color: "#FFFF", justifyContent: "center" }}>
                            <Row >
                                <div className="col-3 d-flex align-items-center justify-content: mr-4 ml-1 ">
                                    <em className="fa fa-address-card fa-3x"></em>
                                </div>
                                <div className="col-6 py-3 d-flex rounded-right">
                                    <div className="h5">{this.nome} Fichas de arroz</div>
                                </div>
                            </Row>
                        </CardHeader>
                        <CardBody style={{ color: '#343a40' }}>
                            <Row>
                                <Col>
                                    <div style={{ width: "15px" }} />
                                    <Label>Tipo: {this.tipo}</Label>
                                    <div style={{ width: "15px" }} />
                                    <Label>Data: {this.data} 21/10/2021</Label>
                                    <div style={{ width: "15px" }} />
                                    <div style={{ width: "15px" }} />
                                    <Label>{this.militares} Militares adicionados</Label>
                                </Col>
                            </Row>
                            <Label for="descricao">Descrição</Label>
                            <Input
                                disabled
                                type="textarea"
                                value={this.descricao}
                                style={{
                                    resize: "none",
                                    height: "75px",
                                    cursor: "pointer",
                                }}
                            />
                        </CardBody>
                    </Card>
                </a >
            );

        //esse card 
        } {/* else if (this.tipo === "diario" || this.tipo === "BGA" || this.tipo === "BGO" || this.tipo === "BIR") {
            return (
                <a href={this.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    
                <Card style={{ borderRadius: '10px', width: "16rem", justifyContent: "center" }}>
                    <CardHeader className="col-12" style={{background: this.color, color: "#fff", height: "4rem"}}>
                        <Row >
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <em className="fas fa-newspaper fa-3x"></em>
                            </div>
                            <div className="col-9 py-2" >
                                <div className="h5 mt-0">{this.nome} Diario de feijão</div>
                                
                            </div>
                        </Row>
                    </CardHeader>

                    <CardBody style={{ color: '#343a40' }}>
                        <Row>
                            <Col>
                                <Label>Tipo: {this.tipo}</Label>
                                <div style={{ width: "15px" }} />
                                <Label>Data: {this.data} 21/10/2021</Label>
                                <div style={{ width: "15px" }} />
                                <Label>n Militares associados</Label>
                            </Col>
                        </Row>
                        <Label for="descricao">Descrição</Label>
                        <Input
                            disabled
                            type="textarea"
                            value="disgraçaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa disgraçaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa disgraçaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                            style={{
                                resize: "none",
                                height: "75px",
                                cursor: "pointer",
                            }}
                        />
                    </CardBody>
                </Card>
            </a >
               
            );
        } */}
    }
}

export default ResultCard