import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import {
    Card,
    CardHeader,
    CardBody,
    CardGroup,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Button,
    Row,
    Col
} from 'reactstrap';
import classnames from 'classnames';

const stepNavitemStyle = {
    backgroundColor: '#fcfcfc'
    
};

class FormWizardVertical extends Component {
    state = {
        activeStep: '1'
    };

    toggleStep = activeStep => () => {
        if (this.state.activeStep !== activeStep) {
            this.setState({
                activeStep
            });
        }
    };

    done = () => {
        alert('cavalo');
    };

render() {
    return (

        <div className="d-flex align-items-center justify-content-center container container-table" style={{"height": "800px"}}>
        <Card style={ {"width": "900px", "height": "720px", borderRadius: '20px', "box-shadow": "#ccc"}} class="shadow-lg p-3 mb-5 bg-white rounded ">
            <CardHeader><h3>Cadastro de documentos</h3></CardHeader>
            <CardBody>
                <Row>
                
                    <Col xs="4" style={{ justifyContent: 'center', alignItems: 'center'}} className="border-end">
                        <Nav pills vertical={true} >
                            <NavItem  >
                                <Button
                                    outline color="danger"
                                    tag="div"
                                    className={classnames({
                                        active: this.state.activeStep === '1'
                                    }) }
                                    onClick={this.toggleStep('1')}
                                    style={{ "width": "230px",borderRadius: '15px', border: '2px solid'}}
                                >
                                    <h4 style={{"font-size":"1.8rem"}} className="text-center my-3">Dados iniciais</h4>
                                </Button>
                                <div style={{"height" : "25px"}}></div>
                            </NavItem>
                            <NavItem >
                                <Button
                                    outline color="danger"
                                    tag="div"
                                    className={classnames({
                                        active: this.state.activeStep === '2'
                                    })}
                                    onClick={this.toggleStep('2')}
                                    style={{ "width": "230px",borderRadius: '15px', border: '2px solid'}}
                                >
                                    <h4 style={{"font-size":"1.7rem"}} className="text-center my-3">Edição</h4>
                                </Button>
                                <div style={{"height" : "25px"}}></div>
                            </NavItem>
                            <NavItem >
                                <Button
                                    outline color="danger"
                                    tag="div"
                                    className={classnames({
                                        active: this.state.activeStep === '3'
                                    })}
                                    onClick={this.toggleStep('3')}
                                    style={{ "width": "230px",borderRadius: '15px', border: '2px solid'}}
                                >
                                    <h4 style={{"font-size":"1.7rem"}} className=" text-center my-3">Arquivos</h4>
                                </Button>
                                <div style={{"height" : "25px"}}></div>
                            </NavItem>
                            <NavItem >
                                <Button
                                    outline color="danger"
                                    tag="div"
                                    className={classnames({
                                        active: this.state.activeStep === '4'
                                    })}
                                    onClick={this.toggleStep('4')}
                                    style={{ "width": "230px",borderRadius: '15px', border: '2px solid',}}
                                >
                                    <h4 style={{"font-size":"1.7rem"}} className="text-center my-3">Militares</h4>
                                </Button>
                                <div style={{"height" : "25px"}}></div>          
                            </NavItem>
                        </Nav>        
                    </Col>
                    <Col xs="8">
                        <TabContent activeTab={this.state.activeStep} className="border-0">
                            <TabPane tabId="1">
                                <div className="pt-3 mb-3">
                                    <fieldset>
                                        <h2>Dados Iniciais</h2>
                                        <p className="lead">
                                            Arroz.{' '}
                                        </p>
                                    </fieldset>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <Button
                                        className="ml-auto"
                                        color = "success"
                                        onClick={this.toggleStep('2')}
                                    >
                                        Avançar
                                    </Button>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="pt-3 mb-3">
                                    <fieldset>
                                        <h2>Edição</h2>
                                        <p className="lead">
                                            Feijão{' '}
                                        </p>
                                    </fieldset>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <Button color="danger" onClick={this.toggleStep('1')}>
                                        Voltar
                                    </Button>
                                    <Button
                                        className="ml-auto"
                                        color = "success"
                                        onClick={this.toggleStep('3')}
                                    >
                                        Avançar
                                    </Button>
                                </div>
                                </TabPane>
                            <TabPane tabId="3">
                                <div className="pt-3 mb-3">
                                    <fieldset>
                                        <h2>Arquivos</h2>
                                        <p className="lead">
                                            Batata{' '}
                                        </p>
                                    </fieldset>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <Button color="danger" onClick={this.toggleStep('2')}>
                                        Voltar
                                    </Button>
                                    <Button
                                        className="ml-auto"
                                        color = "success"
                                        onClick={this.toggleStep('4')}
                                    >
                                        Avançar
                                    </Button>
                                </div>
                            </TabPane>
                            <TabPane tabId="4">
                                <div className="pt-3 mb-3">
                                    <fieldset>
                                        <h2>Militares</h2>
                                        <p className="lead">
                                            Arroz, feijão e batata.{' '}
                                        </p>
                                    </fieldset>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <Button color="danger" onClick={this.toggleStep('3')}>
                                        Voltar
                                    </Button>
                                    <Button
                                        className="ml-auto" //submit
                                        color="success" 
                                        onClick={this.done} //fazer oq?
                                    >
                                        Cadastrar
                                    </Button>
                                </div>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </div>
    );
  }
}

export default FormWizardVertical;



