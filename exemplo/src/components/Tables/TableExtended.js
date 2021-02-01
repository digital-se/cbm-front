import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardFooter, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Sparkline from '../Common/Sparklines.js';

class TableExtended extends Component {

    state = {
        listA: [{checked: false}, {checked: false}, {checked: false}],
        listB: [{checked: false}, {checked: false}, {checked: false}]
    }

    // handle global when click on header checkbox
    handleCheckList(listName, checkStat) {
        this.setState({
            [listName]: this.state[listName].map(item => ({...item, checked: checkStat}))
        });
    }
    handleCheckListA = e => this.handleCheckList('listA', e.target.checked)
    handleCheckListB = e => this.handleCheckList('listB', e.target.checked)

    // handle particular changes on each checkbox
    handleChange = (listName, index) => {
        this.setState({
            [listName]: this.state[listName].map((item, i) => (index !== i ? item : {...item, checked: !this.state[listName][index].checked} ) )
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Tables
                        <small>A showcase of different components inside tables</small>
                    </div>
                </div>
                {/* START card */}
                <Card className="card-default">
                    <CardHeader>Demo Table #1</CardHeader>
                    {/* START table-responsive */}
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>UID</th>
                                <th>Picture</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Profile</th>
                                <th>Last Login</th>
                                <th data-check-all>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" onChange={this.handleCheckListA}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="media">
                                        <img className="img-fluid circle" src="img/user/01.jpg" alt="Avater"/>
                                    </div>
                                </td>
                                <td>@twitter</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>mail@example.com</td>
                                <td className="text-center">
                                    <div className="radial-bar radial-bar-25 radial-bar-xs" data-label="25%"></div>
                                </td>
                                <td>1 week</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.state.listA[0].checked} onChange={e => this.handleChange('listA', 0)}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div className="media">
                                        <img className="img-fluid circle" src="img/user/02.jpg" alt="Avater"/>
                                    </div>
                                </td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mail@example.com</td>
                                <td className="text-center">
                                    <div className="radial-bar radial-bar-50 radial-bar-xs" data-label="50%"></div>
                                </td>
                                <td>25 minutes</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.state.listA[1].checked} onChange={e => this.handleChange('listA', 1)}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div className="media">
                                        <img className="img-fluid circle" src="img/user/03.jpg" alt="Avater"/>
                                    </div>
                                </td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>mail@example.com</td>
                                <td className="text-center">
                                    <div className="radial-bar radial-bar-80 radial-bar-xs" data-label="80%"></div>
                                </td>
                                <td>10 hours</td>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.state.listA[2].checked} onChange={e => this.handleChange('listA', 2)}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* END table-responsive */}
                    <CardFooter>
                        <div className="d-flex">
                            <div>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Search"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="Search">Button</button>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <div className="input-group float-right">
                                    <select className="custom-select" id="inputGroupSelect04">
                                        <option value="0">Bulk action</option>
                                        <option value="1">Delete</option>
                                        <option value="2">Clone</option>
                                        <option value="3">Export</option>
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                {/* START card */}
                <Card className="card-default">
                    <CardHeader>Demo Table #2</CardHeader>
                    {/* START table-responsive */}
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th data-check-all>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" onChange={this.handleCheckListB}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </th>
                                <th>Description</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.state.listB[0].checked} onChange={e => this.handleChange('listB', 0)}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="media">
                                        <a className="float-left" href="">
                                            <img className="img-fluid circle" src="img/user/01.jpg" alt="Avatar"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="float-right badge badge-info">admin</div>
                                            <h4>Holly Wallace</h4>
                                            <p>Username: holly123</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.state.listB[1].checked} onChange={e => this.handleChange('listB', 1)}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="media">
                                        <a className="float-left" href="">
                                            <img className="img-fluid circle" src="img/user/03.jpg" alt="Avatar"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="float-right badge badge-info">writer</div>
                                            <h4>Alexis Foster</h4>
                                            <p>Username: ali89</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked/>
                                        <span></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkbox c-checkbox">
                                        <label>
                                            <input type="checkbox" checked={this.state.listB[2].checked} onChange={e => this.handleChange('listB', 2)}/>
                                            <span className="fa fa-check"></span>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="media">
                                        <a className="float-left" href="">
                                            <img className="img-fluid circle" src="img/user/05.jpg" alt="Avatar"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="float-right badge badge-info">editor</div>
                                            <h4>Mario Miles</h4>
                                            <p>Username: mariomiles</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked/>
                                        <span></span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* END table-responsive */}
                    <CardFooter>
                        <div className="d-flex align-items-center">
                            <div>
                                <div className="input-group">
                                    <select className="custom-select" id="inputGroupSelect04">
                                        <option value="0">Bulk action</option>
                                        <option value="1">Delete</option>
                                        <option value="2">Clone</option>
                                        <option value="3">Export</option>
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button">Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <Pagination className="pagination-sm">
                                    <PaginationItem>
                                      <PaginationLink previous href="" />
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="">
                                        1
                                      </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="">
                                        2
                                      </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="">
                                        3
                                      </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink next href="" />
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                {/* END card */}
                {/* START row */}
                <Row>
                    <Col xl="6">
                        {/* START card */}
                        <Card className="card-default">
                            <CardHeader>Demo Tabl</CardHeader>
                            {/* START table-responsive */}
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Task name</th>
                                        <th>Progress</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nunc luctus, quam non condimentum ornare</td>
                                        <td>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '80%'}}>
                                                    <span className="sr-only">80% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>05/05/2014</td>
                                    </tr>
                                    <tr>
                                        <td>Integer in convallis felis.</td>
                                        <td>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '20%'}}>
                                                    <span className="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>15/05/2014</td>
                                    </tr>
                                    <tr>
                                        <td>Nullam sit amet magna vestibulum libero dapibus iaculis.</td>
                                        <td>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}}>
                                                    <span className="sr-only">50% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>05/10/2014</td>
                                    </tr>
                                </tbody>
                            </Table>
                            {/* END table-responsive */}
                        </Card>
                        {/* END card */}
                    </Col>
                    <Col xl="6">
                        {/* START card */}
                        <Card className="card-default">
                            <CardHeader>Demo Table #4</CardHeader>
                            {/* START table-responsive */}
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Activity</th>
                                        <th>Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bootstrap 5.x</td>
                                        <td>
                                            <Sparkline options={{
                                                barColor:"#5d9cec",
                                                height:20,
                                                barWidth:5,
                                                barSpacing:2,
                                                resize:true
                                                }}
                                                values="1,4,4,7,5,9,10"
                                            />
                                        </td>
                                        <td>
                                            <div className="badge badge-danger">Canceled</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Web Engine</td>
                                        <td>
                                            <Sparkline options={{
                                                barColor:"#7266ba",
                                                height:20,
                                                barWidth:5,
                                                barSpacing:2,
                                                resize:true
                                                }}
                                                values="1,4,4,10,5,9,2"
                                            />
                                        </td>
                                        <td>
                                            <div className="badge badge-success">Complete</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nullam sit amet</td>
                                        <td>
                                            <Sparkline options={{
                                                barColor:"#23b7e5",
                                                height:20,
                                                barWidth:5,
                                                barSpacing:2,
                                                resize:true
                                                }}
                                                values="1,4,4,7,5,9,4"
                                            />
                                        </td>
                                        <td>
                                            <div className="badge badge-warning">Delayed</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            {/* END table-responsive */}
                        </Card>
                        {/* END card */}
                    </Col>
                </Row>
                {/* END row */}
            </ContentWrapper>
            );
    }

}

export default TableExtended;
