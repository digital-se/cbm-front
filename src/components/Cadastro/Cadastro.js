import React, { Component} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import Dropzone from 'react-dropzone';

import {
    Card,
    CardHeader,
    CardBody,
    CardGroup,
    CardTitle,
    CardLink,
    CardFooter,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    ButtonGroup,
    Row,
    Col
} from 'reactstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import classnames from 'classnames';

const stepNavitemStyle = {
    backgroundColor: '#fcfcfc'
    
};

class FormWizardVertical extends Component {
    state = {
        activeStep: '1',
        files: []
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

    onDrop = acceptedFiles => {
        this.setState({
            files: acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        });
    };

    createImageItem = (file, index) => (
        <Col md={3} key={index}>
            <img className="img-fluid mb-2" src={file.preview} alt="Item"/>
        </Col>
    )
    
    selectedFiles = () => {
        return(
        <span>{this.state.files.length} selecionados.</span>
        )
        
    }

render() {
    const allFiles = this.state.files;
    return (

        <div className="d-flex align-items-center justify-content-center container container-table" style={{"height": "800px"}}>
        <Card style={ {"width": "900px", "height": "720px", borderRadius: '20px', "box-shadow": "#ccc", minWidth: "800px" }} class="shadow-lg p-3 mb-5 bg-white rounded ">
            <CardHeader><h3>Cadastro de documentos</h3></CardHeader>
            <CardBody>
                <Row>
                    <Col style={{ justifyContent: 'center', alignItems: 'center'}}>
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
                                <div style={{"height" : "25px"}}/>         
                            </NavItem>
                        </Nav>        
                    </Col>

                    <Col xs="8">
                    <div className="justify-content-center align-items-center">
                        <TabContent activeTab={this.state.activeStep} className="border-0">
                            <TabPane tabId="1">
                                <div className="pt-3 mb-3">
                                    <fieldset>
                                    <FormGroup>
                                        <div className= "border-bottom">
                                        <h2>Dados Iniciais</h2> 
                                        </div> <div style={{"height" : "25px"}}/>     
                                            <p className="lead"> </p>
                                           <FormGroup>
                                                <Label for="nome"><h3>Nome do Documento *</h3></Label>
                                                <Input 
                                                    className="form-control"
                                                    placeholder="Insira o nome do documento"
                                                    style={{ minWidth: 182 }}
                                                    name= "nome"
                                                    id="nome"
                                                    onChange={this.changeHandler}>                               
                                                </Input>
                                            </FormGroup>
                                            <div style={{"height" : "25px"}}/> 
                                            <FormGroup>
                                                <Label for="numeracao"><h3>Numeração do documento (Opcional)</h3></Label>
                                                    <Input
                                                        className="form-control"
                                                        placeholder="Ex: 123456"
                                                        style={{ minWidth: 182 }}
                                                        name="numeracao"
                                                        id="numeracao"
                                                        onChange={this.changeHandler}>
                                                        {(inputProps) => <Input {...inputProps} />}
                                                    </Input>
                                            </FormGroup>

                                            <div style={{"height" : "25px"}}/> 

                                            <FormGroup>
                                                <Label for="numeracao"><h3>O documento é público?</h3></Label>
                                                <div className= "form-check">
                                                    <Input className="form-check-input"
                                                        type= "radio"
                                                        name= "radioDefault"
                                                        id= "simRadio"
                                                        checked/>
                                                        <Label>Sim</Label>
                                                </div>
                                                <div className= "form-check">
                                                    <Input className="form-check-input"
                                                        type= "radio"
                                                        name= "radioDefault"
                                                        id= "naoRadio"
                                                        checked/>
                                                        <Label>Não</Label>
                                                </div>
                                            </FormGroup>
                                    </FormGroup>
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
                                            Informações do documento
                                        </p>
                                        </fieldset>
                                        </div>
                                         <hr />
                                        <FormGroup>
                                            <Label for="exampleSelect"><h3>Tipo de Documento*</h3></Label>
                                            <Input
                                                type="select"
                                                name="tipo"
                                                id="tipo"
                                                //value=""
                                            >   
                                                    <option disabled value="">Escolha o tipo</option>
                                                    <option value="bga">BGA</option>
                                                    <option value="bgo">BGO</option>
                                                    <option value="bir">BIR</option>
                                                    <option value="diario">Diário Oficial</option>
                                                    <option value="ficha">Ficha</option>
                                                    <option value="relatorio">Relatório de Processos</option>

                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                        <Label for="data"><h3>Data do documento*</h3></Label>
                                        <Input
                                            type="date"
                                            name="data"
                                            dateFormat="DD/MM/YYYY"
                                            id="data"
                                            >   
                                            </Input>
                                    </FormGroup>

                                    <FormGroup>
                                    <Label for="descrição"><h3>Descrição do documento</h3></Label>
                                    <Input
                                        type="textarea"
                                        name="descrição"
                                        id="descrição"
                                        style={{"height" : "100px"}}
                                        />   
                                    </FormGroup>
                                    
                                    <hr/>
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
                                            Gerencie os arquivos neste documento
                                        </p>
                                    </fieldset>
                                </div>
                                <hr />
                                <h3>Insira um Arquivo {this.state.files.length}</h3>
                                <Dropzone className="card p-3" onDrop={this.onDrop} >
                                    <div className="text-center box-placeholder m-0" style={{"height" : "200px",borderRadius: '20px'}}>
                                
                                        Arraste os arquivos aqui, ou clique para seleciona-los
                                        <p/>
                                        <em className="fa fa-file fa-3x" />
                                        </div>
                                </Dropzone>

                                    <div className="mt-3">
                                        {this.state.files.length > 0 ?
                                            <Row>{allFiles.map(this.createImageItem)}</Row>
                                            :
                                            <div><small>Sem preview no momento.</small></div>
                                            
                                        }
                                    </div>
                            

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
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </div>
    );
  }
}

export default FormWizardVertical;



