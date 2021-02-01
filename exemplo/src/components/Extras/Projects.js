import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Progress, Row, Col, Card, CardHeader, CardBody, CardFooter, Table } from 'reactstrap';

import Sparkline from '../Common/Sparklines';

class Projects extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Projects
                    <div className="ml-auto">
                        <button className="btn btn-secondary btn-sm" type="button">Create project</button>
                    </div>
                </div>
                <Row>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-info">started</div>
                                </div>
                                <h4 className="m-0">Project #1</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="22" color="warning"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">22%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>01/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+5</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-info">started</div>
                                </div>
                                <h4 className="m-0">Project #2</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="80" color="success"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">80%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>02/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+6</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-info">started</div>
                                </div>
                                <h4 className="m-0">Project #3</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="50" color="info"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">50%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>03/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+7</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-warning">paused</div>
                                </div>
                                <h4 className="m-0">Project #4</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="22" color="warning"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">22%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>04/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+8</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge bg-gray">pending</div>
                                </div>
                                <h4 className="m-0">Project #5</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <p className="m-0 text-center">This project does not register progress.</p>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>05/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+9</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-success">completed</div>
                                </div>
                                <h4 className="m-0">Project #6</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="100" color="success"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">100%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>06/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+10</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge bg-gray-dark">canceled</div>
                                </div>
                                <h4 className="m-0">Project #7</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="30" color="warning"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">30%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>04/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+8</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-info">started</div>
                                </div>
                                <h4 className="m-0">Project #8</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="10" color="danger"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">10%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>05/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+9</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xl="4" lg="6">
                        <Card className="b">
                            <CardHeader>
                                <div className="float-right">
                                    <div className="badge badge-success">completed</div>
                                </div>
                                <h4 className="m-0">Project #9</h4>
                                <small className="text-muted">Sed amet lectus id.</small>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="w-100" data-title="Health">
                                        <Progress className="progress-xs m-0" value="100" color="success"/>
                                    </div>
                                    <div className="wd-xxs text-right">
                                        <div className="text-bold text-muted">100%</div>
                                    </div>
                                </div>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Start date</strong>
                                        </td>
                                        <td>06/01/2016</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Members</strong>
                                        </td>
                                        <td>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                            </a>
                                            <a className="inline" href="">
                                                <strong>+10</strong>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Leader</strong>
                                        </td>
                                        <td>
                                            <a href="" title="Team leader">
                                                <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Metrics</strong>
                                        </td>
                                        <td>
                                             <Sparkline values="20,80"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#23b7e5"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="60,40"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#27c24c"]
                                                }}
                                                className="sparkline inline mr-2"/>
                                             <Sparkline values="90,10"
                                                options={{
                                                    type:"pie",
                                                    height:"24",
                                                    sliceColors:["#edf1f2", "#ff902b"]
                                                }}
                                                className="sparkline inline"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="text-center">
                                <button className="btn btn-secondary" type="button">Manage project</button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }
}

export default Projects;


