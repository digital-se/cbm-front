import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class ResultCard extends Component {

    constructor(props) {
        super(props)
        // titulo pode ser edição ou nome completo ¯\_(ツ)_/¯
        this.nome = this.props.nome
        this.data = this.props.data
        this.tipo = this.props.tipo
        this.num = this.props.num
        this.militares = this.props.militares
        
        if (this.tipo === "diario") {
            this.url = this.props.url
        }
    }

    render() {
        if (this.tipo === "ficha") {
            return (
                <Link to={"/ficha/" + this.num} style={{ color: '#fff' }} >
                    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ "width": "250px" }} className="card flex-row align-items-center align-items-stretch border-0">
                            <div style={{ backgroundColor: '#a43f0a' }} className="col-3 d-flex align-items-center justify-content-center rounded-left" >
                                <em className="fa fa-address-card fa-3x"></em>
                            </div>
                            <div style={{ backgroundColor: '#f56e27' }} className="col-9 py-3 rounded-right" >
                                <div className="h4 mt-0">{this.nome}</div>
                                <div className="text-uppercase">{this.data}</div>
                            </div>
                        </div>
                    </Row>
    
                </Link>
            )
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