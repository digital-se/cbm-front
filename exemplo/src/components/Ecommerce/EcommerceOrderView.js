import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardHeader, CardBody, Row, Col, Alert, Table, FormGroup } from 'reactstrap';

class EcommerceOrderView extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Order #987654</div>
                <Card className="card-default">
                    <CardHeader>Order Information</CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg="6">
                                <p className="lead bb">Details</p>
                                <form className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="4">Order ID:</Col>
                                        <Col md="8">
                                            <strong>987654</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Purchased On:</Col>
                                        <Col md="8">
                                            <strong>03/11/2015 10:10</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Client Name:</Col>
                                        <Col md="8">
                                            <strong>Addison Nichols</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Items:</Col>
                                        <Col md="8">
                                            <strong>547</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Amount:</Col>
                                        <Col md="8">
                                            <strong>$515.20</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Shipment:</Col>
                                        <Col md="8">
                                            <strong>04/10/2015</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Status</Col>
                                        <Col md="8">
                                            <div className="badge badge-info">Shipped</div>
                                        </Col>
                                    </FormGroup>
                                </form>
                            </Col>
                            <Col lg="6">
                                <p className="lead bb">Client</p>
                                <form className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="4">Client ID:</Col>
                                        <Col md="8">
                                            <strong>#32654</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Name:</Col>
                                        <Col md="8">
                                            <strong>Addison Nichols</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Email:</Col>
                                        <Col md="8">
                                            <strong>addisong@mail.com</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Company:</Col>
                                        <Col md="8">
                                            <strong>Addison co.</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Phone:</Col>
                                        <Col md="8">
                                            <strong>(123) 123 456465</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Status</Col>
                                        <Col md="8">
                                            <div className="badge badge-success">Active</div>
                                        </Col>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <p className="lead bb">Billing Address</p>
                                <form className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="4">First Name</Col>
                                        <Col md="8">
                                            <strong>John</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Last Name:</Col>
                                        <Col md="8">
                                            <strong>Johnson</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Company:</Col>
                                        <Col md="8">
                                            <strong>John co.</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Address:</Col>
                                        <Col md="8">
                                            <strong>2125 Chesterfield</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">City:</Col>
                                        <Col md="8">
                                            <strong>San Francisco</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">State</Col>
                                        <Col md="8">
                                            <strong>N/a</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">ZIP/Post Code</Col>
                                        <Col md="8">
                                            <strong>1324</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Country</Col>
                                        <Col md="8">
                                            <strong>Neverland</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Phone</Col>
                                        <Col md="8">
                                            <strong>(123) 132 456789</strong>
                                        </Col>
                                    </FormGroup>
                                </form>
                            </Col>
                            <Col lg="6">
                                <p className="lead bb">Shipping Address</p>
                                <form className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="4">First Name</Col>
                                        <Col md="8">
                                            <strong>John</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Last Name:</Col>
                                        <Col md="8">
                                            <strong>Johnson</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Company:</Col>
                                        <Col md="8">
                                            <strong>John co.</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Address:</Col>
                                        <Col md="8">
                                            <strong>2125 Chesterfield</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">City:</Col>
                                        <Col md="8">
                                            <strong>San Francisco</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">State</Col>
                                        <Col md="8">
                                            <strong>N/a</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">ZIP/Post Code</Col>
                                        <Col md="8">
                                            <strong>1324</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Country</Col>
                                        <Col md="8">
                                            <strong>Neverland</strong>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="4">Phone</Col>
                                        <Col md="8">
                                            <strong>(123) 132 456789</strong>
                                        </Col>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                        <Alert color="warning">
                            <em className="fa fa-exclamation-circle fa-lg fa-fw"></em>
                            Shipping address is different than billing address
                        </Alert>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Products in order</CardHeader>
                    <Table hover bordered striped responsive>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Tax</th>
                                <th className="text-center">Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="badge badge-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="badge badge-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="badge badge-warning">N/A</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="badge badge-danger">Out Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">Product #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="badge badge-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </ContentWrapper>
        );
    }

}

export default EcommerceOrderView;
