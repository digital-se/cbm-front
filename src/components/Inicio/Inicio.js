import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        dropdownOpen: false,
        resultados: []
    }

    render() {
        return (


            <ContentWrapper>

                <div className="d-flex align-items-center justify-content-center container container-table" style={{ "height": "630px" }}>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'd-flex' }} class="col-xs-4 col-xs-offset-4">
                        <Card className="border" style={{ "width": "420px", "height": "470px", borderRadius: '3px', "box-shadow": "#ccc", backgroundColor: "#FFF" }}>
                            <CardHeader style={{borderTopLeftRadius: '3px', borderTopRightRadius: '3px'  }}>
                                <center>
                                    <h2 style={{ "font-size": "4.5rem"}}>
                                        Home
                                    </h2>
                                </center>
                            </CardHeader>
                            <CardBody>
                                <div style={{ "height": "40px" }}></div>
                                <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <div className="text-center">
                                        <Row style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Link to={"/busca"} style={{ color: '#fff', textDecoration: 'none' }}>
                                                <div style={{ "width": "300px", "height": "100px", borderRadius: '20px' }} className="card flex-row align-items-center align-items-stretch border-0 rounded">
                                                    <div style={{ backgroundColor: '#fff' }} className="btn-outline-light"></div>
                                                    <div style={{ backgroundColor: '#d7130f' }} className="col-3 d-flex align-items-center justify-content-center rounded-left">
                                                        <em className="fa icon-magnifier fa-3x" />
                                                    </div>
                                                    <div style={{ backgroundColor: '#f13430' }} className="col-9 py-3 d-flex align-items-center justify-content-center rounded-right btn-outline-light" >
                                                        <div className="h2  mt-0">Buscar documentos</div>
                                                        <div className="text-uppercase">{this.data}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Row>
                                    </div>
                                    <div style={{ "height": "20px" }}></div>

                                    <div className="text-center ">
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to={"/cadastro"} style={{ color: '#fff', textDecoration: 'none' }}>
                                                <div style={{ "width": "300px", "height": "100px" }} className="card flex-row align-items-center align-items-stretch border-0">
                                                    <div style={{ backgroundColor: '#d7130f' }} className="col-3 d-flex align-items-center justify-content-center rounded-left" >
                                                        <em className="fa fa-file fa-3x" />
                                                    </div>
                                                    <div style={{ backgroundColor: '#f13430' }} className="col-9 py-3 d-flex align-items-center justify-content-center rounded-right btn-outline-light" >
                                                        <div className="h2  mt-0">Cadastrar documentos</div>
                                                        <div className="text-uppercase">{this.data}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Row>
                                    </div>
                                    <div style={{ "height": "20px" }}></div>
                                </Col>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </ContentWrapper>
        );
    }
}

export default SearchResult;