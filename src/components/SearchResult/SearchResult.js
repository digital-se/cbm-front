import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
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
        db.getSearch().then(resultados => {
            this.setState({ resultados: resultados })
        })
    }

    componentDidMount() {
        this.getSearch()
    }

    render() {
        return (
            <ContentWrapper>
                {console.log(this.state.resultados)}
                <div style={{ overflow: "scroll", "overflow-x": "hidden", height: "742px" }}>
                    {this.state.resultados.length} resultado(s)
                    <Container>
                        <Row>
                            {this.state.resultados.map(document => (
                                <Col xl={2} md={4} key={this.n++} style={{ minWidth: 245 }}>
                                    <ResultCard
                                        id={document.id}
                                        nome={document.nome}
                                        tipo={document.tipo}
                                        data={document.data}
                                        militares={document.militares}
                                        numeracao={document.num}
                                        descricao={document.descricao}
                                        url={document.url}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </ContentWrapper>
        );
    }
}

export default withTranslation()(SearchResult);