import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Button, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// React Slider
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// React Select
import Select from 'react-select';
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import CardTool from '../Common/CardTool'


// used for react select
const STATES = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
    { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
    { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
    { value: 'queensland', label: 'Queensland', className: 'State-Qld' },
    { value: 'western-australia', label: 'Western Australia', className: 'State-WA' },
    { value: 'south-australia', label: 'South Australia', className: 'State-SA' },
    { value: 'tasmania', label: 'Tasmania', className: 'State-Tas' },
    { value: 'northern-territory', label: 'Northern Territory', className: 'State-NT' },
]

class Search extends Component {

    state = {
        selectedOptionMulti: []
    }

    handleChangeSelectMulti = (selectedOptionMulti) => {
        this.setState({ selectedOptionMulti });
    }

    renderInputGroup = props => {
        return (
            <div className="input-group date">
                <input className="form-control" {...props} />
                <span className="input-group-append input-group-addon">
                    <span className="input-group-text fas fa-calendar-alt"></span>
                </span>
            </div>
        )
    }

    render() {
        // used for react select
        const { selectedOptionMulti } = this.state;

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Search
                        <small>Search and filter results</small>
                    </div>
                </div>
                <Row>
                    <Col lg="9">
                        <div className="form-group mb-4">
                            <input className="form-control mb-2" type="text" placeholder="Search products, people, apps, etc."/>
                            <div className="d-flex">
                                <button className="btn btn-secondary" type="button">Search</button>
                                <div className="ml-auto">
                                    <label className="c-checkbox">
                                        <input id="inlineCheckbox10" type="checkbox" defaultValue="option1"/>
                                        <span className="fa fa-check"></span>Products</label>
                                    <label className="c-checkbox">
                                        <input id="inlineCheckbox20" type="checkbox" defaultValue="option2"/>
                                        <span className="fa fa-check"></span>People</label>
                                    <label className="c-checkbox">
                                        <input id="inlineCheckbox30" type="checkbox" defaultValue="option3"/>
                                        <span className="fa fa-check"></span>Apps</label>
                                </div>
                            </div>
                        </div>
                        {/* START card */}
                        <div className="card card-default">
                            <div className="card-header">
                                <CardTool refresh onRefresh={(_,done) => setTimeout(done,2000)}/>
                                Search Results
                            </div>
                            {/* START table-responsive */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th data-check-all="" className="wd-xxs">
                                            <div className="checkbox c-checkbox">
                                                <label className="m-0">
                                                    <input type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </div>
                                        </th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="media align-items-center">
                                                <a className="mr-3" href="">
                                                    <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy"/>
                                                </a>
                                                <div className="media-body d-flex">
                                                    <div>
                                                        <h4 className="m-0">Product 1</h4>
                                                        <small className="text-muted">Category1, Category2</small>
                                                        <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Button color="info" size="sm">View</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="media align-items-center">
                                                <a className="mr-3" href="">
                                                    <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy"/>
                                                </a>
                                                <div className="media-body d-flex">
                                                    <div>
                                                        <h4 className="m-0">Product 2</h4>
                                                        <small className="text-muted">Category1, Category2</small>
                                                        <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Button color="info" size="sm">View</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="media align-items-center">
                                                <a className="mr-3" href="">
                                                    <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy"/>
                                                </a>
                                                <div className="media-body d-flex">
                                                    <div>
                                                        <h4 className="m-0">Product 3</h4>
                                                        <small className="text-muted">Category1, Category2</small>
                                                        <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Button color="info" size="sm">View</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="media align-items-center">
                                                <a className="mr-3" href="">
                                                    <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy"/>
                                                </a>
                                                <div className="media-body d-flex">
                                                    <div>
                                                        <h4 className="m-0">Product 4</h4>
                                                        <small className="text-muted">Category1, Category2</small>
                                                        <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Button color="info" size="sm">View</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="checkbox c-checkbox">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="media align-items-center">
                                                <a className="mr-3" href="">
                                                    <img className="img-fluid rounded thumb64" src="img/dummy.png" alt="Dummy"/>
                                                </a>
                                                <div className="media-body d-flex">
                                                    <div>
                                                        <h4 className="m-0">Product 5</h4>
                                                        <small className="text-muted">Category1, Category2</small>
                                                        <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Button color="info" size="sm">View</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            {/* END table-responsive */}
                            <div className="card-footer">
                                <div className="d-flex">
                                    <button className="btn btn-sm btn-secondary">Clear</button>
                                    <nav className="ml-auto">
                                        <Pagination size="sm">
                                            <PaginationItem active>
                                                <PaginationLink>1</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink>2</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink>3</PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink next>»</PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* END card */}
                    </Col>
                    <Col lg="3">
                        <h3 className="m-0 pb-3">Filters</h3>
                        <div className="form-group mb-4">
                            <label className="col-form-label mb-2">by Text</label>
                            <br/>
                            <Select
                                name="multi-select-name"
                                multi
                                simpleValue
                                value={selectedOptionMulti}
                                onChange={this.handleChangeSelectMulti}
                                options={STATES}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mb-2">by Date</label>
                            <br/>
                            <Datetime inputProps={{className: 'form-control'}} closeOnSelect={true} renderInput={ this.renderInputGroup }/>
                        </div>
                        <div className="form-group mb-4">
                            <label className="col-form-label mb-2">by Range</label>
                            <br/>
                            <Slider/>
                        </div>
                        <Button color="secondary" size="lg">Apply</Button>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default Search;
