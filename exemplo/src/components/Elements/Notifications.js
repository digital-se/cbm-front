import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Popover,
    PopoverHeader,
    PopoverBody,
    Tooltip,
    Progress } from 'reactstrap';

// example component to show popovers
class PopoverItem extends Component {
    state = { popoverOpen: false }
    toggle = () => this.setState({
        popoverOpen: !this.state.popoverOpen
    })
    render() {
        return (
            <span>
                <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>{this.props.item.text}</Button>
                <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Proin posuere gravida ipsum, a pretium augue commodo eget. Fusce pellentesque congue justo.</PopoverBody>
                </Popover>
            </span>
        )
    }
}

// example component to show tooltip
class TooltipItem extends Component {
    // static propTypes { content: PropTypes.string }
    state = {
        _id: 'id4tooltip_'+new Date().getUTCMilliseconds()+(Math.floor(Math.random()*10) + 1),
        tooltipOpen: false
    }
    toggle = e => this.setState({tooltipOpen: !this.state.tooltipOpen})
    render() {
        return [
            <Tooltip {...this.props} isOpen={this.state.tooltipOpen} toggle={this.toggle} target={this.state._id} key='1'>
                {this.props.content}
            </Tooltip>,
            React.cloneElement(React.Children.only(this.props.children), {
                id: this.state._id,
                key: '2'
            })
        ]
    }
}

class Notifications extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            toasterPos: 'top-right',
            toasterType: 'info'
        };

    }

    componentDidMount() {
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    notify = () => toast("Wow so easy !", {
        type: this.state.toasterType,
        position: this.state.toasterPos
    })

    onToastPosChanged = e => {
        this.setState({
            toasterPos: e.currentTarget.value
        })
    }
    onToastTypeChanged = e => {
        this.setState({
            toasterType: e.currentTarget.value
        });
    }

    render() {

        const TOAST_POSITIONS=['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center']
        const TOAST_TYPES=['info', 'success', 'warning', 'error', 'default']

        const PLACEMENTS = [
            { placement: 'top', text: 'Top' },
            { placement: 'bottom', text: 'Bottom' },
            { placement: 'left', text: 'Left' },
            { placement: 'right',text: 'Right' }
        ]

        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Notifications
                      <span className="text-sm d-none d-sm-block">A complete set of notification posibilities</span>
                      {/* Breadcrumb below title */}
                      <ol className="breadcrumb breadcrumb px-0 pb-0">
                         <li className="breadcrumb-item"><a href="">Home</a>
                         </li>
                         <li className="breadcrumb-item"><a href="">Elements</a>
                         </li>
                         <li className="breadcrumb-item active">Notifications</li>
                      </ol>
                   </div>
                   {/* Breadcrumb right aligned */}
                   <ol className="breadcrumb ml-auto">
                      <li className="breadcrumb-item"><a href="">Home</a>
                      </li>
                      <li className="breadcrumb-item"><a href="">Elements</a>
                      </li>
                      <li className="breadcrumb-item active">Notifications</li>
                   </ol>
                </div>
                {/* Breadcrumb next to view title */}
                <ol className="breadcrumb">
                   <li className="breadcrumb-item"><a href="">Home</a>
                   </li>
                   <li className="breadcrumb-item"><a href="">Elements</a>
                   </li>
                   <li className="breadcrumb-item active">Notifications</li>
                </ol>
                <ol className="breadcrumb">
                   <li className="breadcrumb-item"><a href="">Home</a>
                   </li>
                   <li className="breadcrumb-item"><a href="">Elements</a>
                   </li>
                   <li className="breadcrumb-item active">Notifications</li>
                </ol>

                {/* START card */}
                <Card className="card-default">
                    <CardHeader>React Toastify</CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="6">
                                <Row>
                                    <Col md="6">
                                        <p><strong>Position</strong></p>
                                        {TOAST_POSITIONS.map((pos, i) => (
                                            <FormGroup check key={i}>
                                                <Label check>
                                                  <Input type="radio" name="tPosition" value={pos} checked={this.state.toasterPos === pos} onChange={this.onToastPosChanged}/>{' '}
                                                  {pos}
                                                </Label>
                                            </FormGroup>
                                        ))}
                                    </Col>
                                    <Col md="6">
                                        <p className="mt-3 mt-sm-0"><strong>Type</strong></p>
                                        {TOAST_TYPES.map((type, i) => (
                                            <FormGroup check key={i}>
                                                <Label check>
                                                  <Input type="radio" name="tType" value={type} checked={this.state.toasterType === type} onChange={this.onToastTypeChanged}/>{' '}
                                                  {type}
                                                </Label>
                                            </FormGroup>
                                        ))}
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="6">
                                <Button color="primary" className="mt-3 mt-sm-0" onClick={this.notify}>Notify !</Button>
                                <ToastContainer />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                {/* END card */}

                {/* START row */}
                <div className="row">
                   <div className="col-xl-6">
                      {/* START card */}
                      <Card className="card-default">
                         <CardHeader>Alert Styles</CardHeader>
                         <CardBody>
                              <Alert color="primary">
                                This is a primary alert — check it out!
                              </Alert>
                              <Alert color="secondary">
                                This is a secondary alert — check it out!
                              </Alert>
                              <Alert color="success">
                                This is a success alert — check it out!
                              </Alert>
                              <Alert color="danger">
                                This is a danger alert — check it out!
                              </Alert>
                              <Alert color="warning">
                                This is a warning alert — check it out!
                              </Alert>
                              <Alert color="info">
                                This is a info alert — check it out!
                              </Alert>
                         </CardBody>
                      </Card>
                      {/* END card */}
                   </div>

                   <div className="col-xl-6">

                      {/* START card */}
                      <Card className="card-default">
                         <CardHeader>Modals</CardHeader>
                         <CardBody>
                            {/* Button trigger modal */}
                            <Button color="primary" onClick={this.toggleModal}>Open Modal Example</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                              <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                              <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                         </CardBody>
                      </Card>
                      {/* END card */}
                      {/* START card */}
                      <Card className="card-default">
                         <CardHeader>Popovers</CardHeader>
                         <CardBody>
                            { PLACEMENTS.map((popover, i) => (
                                <PopoverItem key={i} item={popover} id={i} />
                            ))}
                         </CardBody>
                      </Card>
                      {/* END card */}
                      {/* START card */}
                      <Card className="card-default">
                         <CardHeader>Tooltips</CardHeader>
                         <CardBody>
                                { PLACEMENTS.map((item, i) => (
                                    <TooltipItem id={`tooltip-${i}}`} key={i} placement={item.placement} content={`Tooltip on ${item.text}`}>
                                        <Button>Tooltip {item.text}</Button>
                                    </TooltipItem>
                                ))}
                         </CardBody>
                      </Card>
                      {/* END card */}
                   </div>
                </div>
                {/* END row */}
                {/* START card */}
                <Card className="card-default">
                    <CardHeader>Progress Bar</CardHeader>
                    <CardBody>
                        <Progress value={2 * 5} />
                        <Progress color="success" value="25" />
                        <Progress color="info" value={50} />
                        <Progress color="warning" value={75} />
                        <Progress color="danger" value="100" />
                    </CardBody>
                    <CardBody>
                        <Progress striped value={2 * 5} />
                        <Progress striped color="success" value="25" />
                        <Progress striped color="info" value={50} />
                        <Progress striped color="warning" value={75} />
                        <Progress striped color="danger" value="100" />
                        <Progress multi>
                            <Progress striped bar value="10" />
                            <Progress striped bar color="success" value="30" />
                            <Progress striped bar color="warning" value="20" />
                            <Progress striped bar color="danger" value="20" />
                        </Progress>
                    </CardBody>
                    <CardBody>
                        <div className="text-center">Plain</div>
                        <Progress multi>
                            <Progress bar value="15" />
                            <Progress bar color="success" value="20" />
                            <Progress bar color="info" value="25" />
                            <Progress bar color="warning" value="20" />
                            <Progress bar color="danger" value="15" />
                        </Progress>
                        <div className="text-center">With Labels</div>
                        <Progress multi>
                            <Progress bar value="15">Meh</Progress>
                            <Progress bar color="success" value="35">Wow!</Progress>
                            <Progress bar color="warning" value="25">25%</Progress>
                            <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
                        </Progress>
                        <div className="text-center">Stripes and Animations</div>
                        <Progress multi>
                            <Progress bar striped value="15">Stripes</Progress>
                            <Progress bar animated color="success" value="30">Animated Stripes</Progress>
                            <Progress bar color="info" value="25">Plain</Progress>
                        </Progress>
                    </CardBody>
                </Card>
                {/* END card */}
            </ContentWrapper>
            );
    }
}

export default Notifications;
