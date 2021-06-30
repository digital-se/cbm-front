import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

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
            this.setState({ resultados: resultados.documents })
        })
    }

    componentDidMount() {
        this.getSearch()
    }

    render() {
        return (
            <ContentWrapper>
                {console.log(this.state.resultados)}
                <div style={{overflow: "scroll", "overflow-x" : "hidden", height: "720px"}}>
                    {this.state.resultados.length} resultado(s)
                    <Container >
                        <Row>
                            {this.state.resultados.map(document => (
                                <Col xl={4} md={8} key={this.n++}>
                                    <ResultCard nome={document.nome}  tipo={document.type} data={document.date} num={document.num} url={document.url} />
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