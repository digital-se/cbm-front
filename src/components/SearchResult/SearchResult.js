import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col } from 'reactstrap';
import ResultCard from "../Comp/ResultCard"
import api from "../../Api/api"
import 'loaders.css/loaders.css';
import 'spinkit/css/spinkit.css';

class SearchResult extends React.Component {

    state = {
        dropdownOpen: false,
        resultados: [],
        waitResult: false,
        searching:"Buscando...",
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getSearch() {
        this.n = 0
        api.getSearch().then(resultados => {
            this.setState({ resultados: resultados })  
            this.awaitResult(true)
        })
    }

    componentDidMount() {
        this.getSearch()
        
    }
    
    awaitResult = async (q) => {
        let n = this.state.resultados.length
        if (q == true){
            await this.setState({ ...this.state, searching: n + " resultado(s)."});
        }
    }

    render() {
        return (
            <ContentWrapper>
                {console.log(this.state.resultados)} 
                <div style={{ overflow: "scroll", "overflow-x": "hidden", height: "742px" }}>
                    <p>{this.state.searching} </p> 
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

export default (SearchResult);