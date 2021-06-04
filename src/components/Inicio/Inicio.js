import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

import qs from "qs";

import ResultCard from "../Comp/ResultCard"

import db from "../../db/db"

class SearchResult extends React.Component {

    state = {
        dropdownOpen: false,
        resultados: []
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getSearch() {
        this.n = 0
        console.log(this.props)
        console.log(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }))
        db.getSearch().then(resultados => {
            this.setState({ resultados: resultados.documents })
        })
    }

    componentDidMount() {
        this.getSearch()
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>
                    <h2>Sistema Interno de Gestão Documental</h2>
                    </div>   
                </div>
                <div>
                   <p>  </p>
                </div>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col xl={3} md={6}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Link to={"/busca"} style={{ color: '#fff',textDecoration: 'none'}}> 
                                <div style={{ "width": "250px"}} className="card flex-row align-items-center align-items-stretch border-0">
                                    <div style = {{ backgroundColor: '#fff'}} className="btn-outline-light"></div>
                                    <div style={{ backgroundColor: '#d7130f' }} className="col-3 d-flex align-items-center justify-content-center rounded-left">
                                        <em className="fa icon-magnifier fa-3x" />
                                    </div>
                                    <div style={{ backgroundColor: '#f13430' }} className="col-9 py-3 d-flex align-items-center justify-content-center rounded-right btn-outline-light" >
                                        <div className="h2  mt-0">Busca</div>
                                        <div className="text-uppercase">{this.data}</div>
                                    </div>                   
                                </div>   
                            </Link>             
                        </Row>    
                    </Col>
                    
                    <Col xl={3} md={6} className="text-center " > 
                        <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Link to={"/cadastro"} style={{ color: '#fff',textDecoration: 'none' }}>
                                <div style={{ "width": "250px" }} className="card flex-row align-items-center align-items-stretch border-0">
                                    <div style={{ backgroundColor: '#d7130f' }} className="col-3 d-flex align-items-center justify-content-center rounded-left" >
                                        <em className="fa fa-file fa-3x" />
                                    </div>
                                    <div style={{ backgroundColor: '#f13430' }} className="col-9 py-3 d-flex align-items-center justify-content-center rounded-right btn-outline-light" >
                                        <div className="h2  mt-0">Cadastro</div>
                                        <div className="text-uppercase">{this.data}</div>
                                    </div>
                                </div>
                            </Link>
                        </Row>        
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default withTranslation()(SearchResult);