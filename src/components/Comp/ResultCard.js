import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';

class ResultCard extends Component {

    constructor(props) {
        super(props)

        let data = new Date(this.props.data)

        this.id = this.props.id
        this.nome = this.props.nome
        this.data = (((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear())
        this.tipo = this.props.tipo
        this.numeracao = this.props.numeracao
        this.militares = this.props.militares
        this.descricao = this.props.descricao
        

        if (this.tipo === "diario") {
            this.nome = "Diário"
            this.icon = <em className="fas fa-newspaper fa-3x"></em>
            this.militaresLabel = <Label>{this.militares.length + " "} militares referidos</Label>
            this.url = this.props.url
            this.color = "#ff902b"


        } else if (this.tipo === "ficha") {
            this.nome = "Ficha "
            this.militaresLabel = <Label>{this.militares.length + " "} militares referidos</Label>
            this.icon = <em className="fa fa-address-card fa-3x"></em>
            this.color = "#D04545"
            this.url = "/ficha/" + this.numeracao

        } else if (this.tipo === "relatorio") {
            this.nome = "Relatório de processos"
            this.militaresLabel = <Label>{this.militares.length + " "} militares referidos</Label>
            this.icon = <em className="fa fa-address-card fa-3x"></em>
            this.color = "#D0B243"
            this.url = "/gerenciar/" + this.props.id

        } else if (this.tipo === "bga") {
            this.icon = <em className="fa fa-file-alt fa-3x"></em>
            this.militaresLabel = <Label>{this.militares.length + " "} militares referidos</Label>
            this.color = "#37bc9b"
            this.url = "/gerenciar/" + this.props.id

        } else if (this.tipo === "bgo") {
            this.icon = <em className="fa fa-file-alt fa-3x"></em>
            this.militaresLabel = <Label>{this.militares.length + " "} militares referidos</Label>
            this.color = "#43d967"
            this.url = "/gerenciar/" + this.props.id

        } else if (this.tipo === "bir") { //BIR
            this.icon = <em className="fa fa-file-alt fa-3x"></em>
            this.militaresLabel = <Label>{this.militares.length + " "} militares referidos</Label>
            this.color = "#17a2b8"
            this.url = "/gerenciar/" + this.props.id


        }
    }

    render() {
        return (
            <a
                href={this.url}
                target="_blank"
                rel="noreferrer"
                style={{
                    width: "14rem",
                    justifyContent: "center",
                    color: "#FFFF",
                    cursor: "pointer",
                    textDecoration: 'none'
                }}>
                <Card className="border" style={{ borderRadius: '11px', width: "14rem", justifyContent: "center" }}>
                    <CardHeader className="col-12" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', backgroundColor: this.color, color: "#FFFF", justifyContent: "center" }}>

                        <Row >
                            <div className="col-3 d-flex align-items-center align-content-center justify-content-auto">
                                {this.icon}
                            </div>
                            <div className="col-9 py-2 align-items-center align-content-center justify-content-auto">
                                <div className="h5">{this.nome}</div>
                            </div>
                        </Row>
                    </CardHeader>
                    <CardBody style={{ color: '#343a40' }}>
                        <Row>
                            <Col>
                                <div style={{ width: "15px" }} />
                                <Label>Tipo: {" " + this.tipo}</Label>
                                <div style={{ width: "15px" }} />
                                <Label>Data: {" " + this.data}</Label>
                                <div style={{ width: "15px" }} />
                                <Label>{this.militaresLabel}</Label>
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
    }
}

export default ResultCard