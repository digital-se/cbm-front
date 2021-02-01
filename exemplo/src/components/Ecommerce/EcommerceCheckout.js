import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardHeader, CardBody, CardTitle, Collapse, Row, Col, Table } from 'reactstrap';

class EcommerceCheckout extends Component {

    state = {
        oneAtATime: true,
        accordionState: [true, false, false, false, false, false],
    }

    /* id is the index in the accordionState array */
    toggleAccordion = id => {
        let accordionState = this.state.accordionState.map((val,i) => {
            return id === i ? !val : (this.state.oneAtATime ? false : val)
        })
        this.setState({
            accordionState
        })
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col lg="3">
                        <Card className="b mb-2">
                            <CardHeader className="bb">
                                <CardTitle tag="h4">Order Summnary</CardTitle>
                            </CardHeader>
                            <CardBody className="bt">
                                <h4 className="b0">Order #65487</h4>
                            </CardBody>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>
                                            <div className="text-right text-bold">$400</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax</td>
                                        <td>
                                            <div className="text-right text-bold">$1.44</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Shiping</td>
                                        <td>
                                            <div className="text-right text-bold">$5</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardBody>
                                <div className="clearfix">
                                    <div className="float-right text-right">
                                        <div className="text-bold">$406.44</div>
                                        <div className="text-sm">USD</div>
                                    </div>
                                    <div className="float-left text-bold text-dark">ORDER TOTAL</div>
                                </div>
                            </CardBody>
                            <CardBody>
                                <p>
                                    <button className="btn btn-primary btn-block" type="button">EXPRESS CHECKOUT</button>
                                </p>
                                <small className="text-muted">* To use this method you must be registered first</small>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="9">
                        <div className="container-md mx-0">
                            {/* Checkout Process */}
                            <form action="" method="post" noValidate>
                                <div id="accordion">
                                    {/* Checkout Method */}
                                    <div className="card b mb-2">
                                        <CardHeader onClick={() => this.toggleAccordion(0)}>
                                            <CardTitle tag="h4">
                                                <a className="text-inherit">1. Checkout Method</a>
                                            </CardTitle>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordionState[0]}>
                                            <CardBody id="collapse01">
                                                <Row>
                                                    <Col lg="6">
                                                        <p>
                                                            <strong>REGISTER AND SAVE TIME!</strong>
                                                        </p>
                                                        <p className="mb-0">Fast and simple check out</p>
                                                        <p>Quick access to order history</p>
                                                        <div className="my-3">
                                                            <button className="btn btn-primary" type="button" onClick={() => this.toggleAccordion(1)}>Register</button>
                                                        </div>
                                                        <hr className="my-4"/>
                                                        <button className="btn btn-secondary" type="button" onClick={() => this.toggleAccordion(1)}>Checkout as Guest</button>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="form-group">
                                                            <p>Already a Member?</p>
                                                        </div>
                                                        <div className="form-group">
                                                            <input className="form-control" type="text" name="login-name" required placeholder="Email Address"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <input className="form-control" type="text" name="login-password" required placeholder="Password"/>
                                                        </div>
                                                        <p>
                                                            <a href="">Forgot password?</a>
                                                        </p>
                                                        <button className="btn btn-primary" type="button">Login</button>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Collapse>
                                    </div>
                                    {/* Billing Information */}
                                    <div className="card b mb-2">
                                        <CardHeader onClick={() => this.toggleAccordion(1)}>
                                            <CardTitle tag="h4">
                                                <a className="text-inherit">2. Billing Information</a>
                                            </CardTitle>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordionState[1]}>
                                            <CardBody id="collapse02">
                                                <Row>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>First Name*</label>
                                                            <input className="form-control" type="text" name="checkout-name" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Company</label>
                                                            <input className="form-control" type="text" name="checkout-company"/>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>Last Name*</label>
                                                            <input className="form-control" type="text" name="checkout-lastname" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email Address*</label>
                                                            <input className="form-control" type="text" name="checkout-email" required/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl="12">
                                                        <div className="form-group">
                                                            <label>Address</label>
                                                            <input className="form-control" type="text" name="checkout-address" required/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>City*</label>
                                                            <input className="form-control" type="text" name="checkout-city" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Zip/Postal Code*</label>
                                                            <input className="form-control" type="text" name="checkout-zip" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Telephone*</label>
                                                            <input className="form-control" type="text" name="checkout-telephone" required/>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>State/Province*</label>
                                                            <input className="form-control" type="text" name="checkout-state" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Country*</label>
                                                            <input className="form-control" type="text" name="checkout-country" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Fax</label>
                                                            <input className="form-control" type="text" name="checkout-fax"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="my-2">
                                                    <div className="c-radio">
                                                        <label>
                                                            <input id="chk-guest" type="radio" name="checkout-ship-to" defaultValue="address"/>
                                                            <span className="fa fa-check"></span>Ship to this address</label>
                                                    </div>
                                                    <div className="c-radio">
                                                        <label>
                                                            <input id="chk-guest" type="radio" name="checkout-ship-to" defaultValue="other"/>
                                                            <span className="fa fa-check"></span>Ship to different address</label>
                                                    </div>
                                                </div>
                                                <div className="pt-2 clearfix">
                                                    <p className="float-right text-sm">
                                                        <i>Fields marked with (*) are required</i>
                                                    </p>
                                                    <div className="float-left">
                                                        <button className="btn btn-primary" type="button" onClick={() => this.toggleAccordion(2)}>Continue</button>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Collapse>
                                    </div>
                                    {/* Shipping Information */}
                                    <div className="card b mb-2">
                                        <CardHeader onClick={() => this.toggleAccordion(2)}>
                                            <CardTitle tag="h4">
                                                <a className="text-inherit">3. Shipping Information</a>
                                            </CardTitle>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordionState[2]}>
                                            <CardBody id="collapse03">
                                                <Row>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>First Name*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-name" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Company</label>
                                                            <input className="form-control" type="text" name="checkout-ship-company"/>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>Last Name*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-lastname" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email Address*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-email" required/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl="12">
                                                        <div className="form-group">
                                                            <label>Address</label>
                                                            <input className="form-control" type="text" name="checkout-ship-address" required/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>City*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-city" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Zip/Postal Code*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-zip" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Telephone*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-telephone" required/>
                                                        </div>
                                                    </Col>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <label>State/Province*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-state" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Country*</label>
                                                            <input className="form-control" type="text" name="checkout-ship-country" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Fax</label>
                                                            <input className="form-control" type="text" name="checkout-ship-fax"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="my-2">
                                                    <div className="checkbox c-checkbox">
                                                        <label>
                                                            <input id="chk-guest" type="checkbox" name="checkout-use-bill-address"/>
                                                            <span className="fa fa-check"></span>Use Billing Address</label>
                                                    </div>
                                                </div>
                                                <div className="pt-2 clearfix">
                                                    <p className="float-right text-sm">
                                                        <i>Fields marked with (*) are required</i>
                                                    </p>
                                                    <div className="float-left">
                                                        <button className="btn btn-primary" type="button" onClick={() => this.toggleAccordion(3)}>Continue</button>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Collapse>
                                    </div>
                                    {/* Shipping Method */}
                                    <div className="card b mb-2">
                                        <CardHeader onClick={() => this.toggleAccordion(3)}>
                                            <CardTitle tag="h4">
                                                <a className="text-inherit">4. Shipping Method</a>
                                            </CardTitle>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordionState[3]}>
                                            <CardBody id="collapse04">
                                                <Table>
                                                    <thead className="bg-gray-lighter">
                                                        <tr>
                                                            <th className="wd-xxs">
                                                                <em className="fa fa-check text-muted ml-1"></em>
                                                            </th>
                                                            <th>Method</th>
                                                            <th>Deliver Time</th>
                                                            <th>Cost</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="c-radio">
                                                                    <label>
                                                                        <input id="chk-guest" type="radio" name="checkout-ship" defaultValue="free"/>
                                                                        <span className="fa fa-check"></span>
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <strong>Free Shipping</strong>
                                                            </td>
                                                            <td>10 to 15 days</td>
                                                            <td>
                                                                <strong className="h4 text-green">Free</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="c-radio">
                                                                    <label>
                                                                        <input id="chk-guest" type="radio" name="checkout-ship" defaultValue="std"/>
                                                                        <span className="fa fa-check"></span>
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <strong>Standard post</strong>
                                                            </td>
                                                            <td>4 to 7 days</td>
                                                            <td>
                                                                <strong className="h4">$9.95</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="c-radio">
                                                                    <label>
                                                                        <input id="chk-guest" type="radio" name="checkout-ship" defaultValue="next"/>
                                                                        <span className="fa fa-check"></span>
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <strong>Next day</strong>
                                                            </td>
                                                            <td>tomorrow</td>
                                                            <td>
                                                                <strong className="h4">$19</strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                <div className="pt-2 clearfix">
                                                    <div className="float-left">
                                                        <button className="btn btn-primary" type="button" onClick={() => this.toggleAccordion(4)}>Continue</button>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Collapse>
                                    </div>
                                    {/* Payment Information */}
                                    <div className="card b mb-2">
                                        <CardHeader onClick={() => this.toggleAccordion(4)}>
                                            <CardTitle tag="h4">
                                                <a className="text-inherit">5. Payment Information</a>
                                            </CardTitle>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordionState[4]}>
                                            <CardBody id="collapse05">
                                                <Row>
                                                    <Col xl="6">
                                                        <div className="form-group">
                                                            <div className="c-radio">
                                                                <label>
                                                                    <input className="form-control" id="chk-guest" type="radio" name="checkout-pay" defaultValue="paypal" defaultChecked/>
                                                                    <span className="fa fa-check"></span>Paypal</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="c-radio">
                                                                <label>
                                                                    <input className="form-control" id="chk-guest" type="radio" name="checkout-pay" defaultValue="check"/>
                                                                    <span className="fa fa-check"></span>Check / Money order</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="c-radio">
                                                                <label>
                                                                    <input className="form-control" id="chk-guest" type="radio" name="checkout-pay" defaultValue="creditcard"/>
                                                                    <span className="fa fa-check"></span>Credit Card (saved)</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Name on Card*</label>
                                                            <input className="form-control" type="text" name="checkout-cc-name" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Credit Card Type*</label>
                                                            <select className="form-control" name="checkout-cc-type" required>
                                                                <option defaultValue="">- Please Select -</option>
                                                                <option defaultValue="amex">American Express</option>
                                                                <option defaultValue="visa">Visa</option>
                                                                <option defaultValue="master">Mastercard</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Credit Card Number*</label>
                                                            <input className="form-control" type="text" name="checkout-cc-number" required/>
                                                        </div>
                                                        <Row>
                                                            <Col xl="5">
                                                                <div className="form-group">
                                                                    <label>Credit Expiration month*</label>
                                                                    <select className="form-control" name="checkout-cc-exp-month" required>
                                                                        <option defaultValue="">Month</option>
                                                                        <option defaultValue="1">January</option>
                                                                        <option defaultValue="2">February</option>
                                                                        <option defaultValue="3">March</option>
                                                                        <option defaultValue="4">April</option>
                                                                        <option defaultValue="5">May</option>
                                                                        <option defaultValue="6">June</option>
                                                                        <option defaultValue="7">Jule</option>
                                                                        <option defaultValue="8">August</option>
                                                                        <option defaultValue="9">September</option>
                                                                        <option defaultValue="10">October</option>
                                                                        <option defaultValue="11">November</option>
                                                                        <option defaultValue="12">December</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col xl="5">
                                                                <div className="form-group">
                                                                    <label>Credit Expiration year*</label>
                                                                    <select className="form-control" name="checkout-cc-exp-year" required>
                                                                        <option defaultValue="">Year</option>
                                                                        <option defaultValue="2016">2016</option>
                                                                        <option defaultValue="2017">2017</option>
                                                                        <option defaultValue="2018">2018</option>
                                                                        <option defaultValue="2019">2019</option>
                                                                        <option defaultValue="2020">2020</option>
                                                                        <option defaultValue="2021">2021</option>
                                                                        <option defaultValue="2022">2022</option>
                                                                        <option defaultValue="2023">2023</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                            <Col xl="2">
                                                                <div className="form-group">
                                                                    <label>CNV*</label>
                                                                    <input className="form-control" type="text" name="checkout-cc-verification" required/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <div className="pt-2 clearfix">
                                                    <p className="float-right text-sm">
                                                        <i>Fields marked with (*) are required</i>
                                                    </p>
                                                    <div className="float-left">
                                                        <button className="btn btn-primary" type="button" onClick={() => this.toggleAccordion(5)}>Continue</button>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Collapse>
                                    </div>
                                    {/* Order Review */}
                                    <div className="card b mb-2">
                                        <CardHeader onClick={() => this.toggleAccordion(5)}>
                                            <CardTitle tag="h4">
                                                <a className="text-inherit">6. Order Review</a>
                                            </CardTitle>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordionState[5]}>
                                            <CardBody id="collapse06">
                                                <div className="table-responsive">
                                                    <Table>
                                                        <colgroup>
                                                            <col className="order-pic" span="1" />
                                                            <col className="order-item-name" span="1" />
                                                            <col className="order-qty" span="1" />
                                                            <col className="order-price" span="1" />
                                                            <col className="order-tax" span="1" />
                                                            <col className="order-total" span="1" />
                                                        </colgroup>
                                                        <thead className="bg-gray-lighter">
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Product Title</th>
                                                                <th className="wd-xs">Qty</th>
                                                                <th>Unit Price</th>
                                                                <th>Tax</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan="5">Subtotal</td>
                                                                <td>$1540.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="5">Shipping &amp; Handling (Free)</td>
                                                                <td>$0.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="5">Tax</td>
                                                                <td>$49.00</td>
                                                            </tr>
                                                            <tr className="order-subtotal">
                                                                <td colSpan="5">Subtotal</td>
                                                                <td>$1340.00</td>
                                                            </tr>
                                                        </tfoot>
                                                        <tbody>
                                                            <tr>
                                                                <td className="order-pic thumb64">
                                                                    <img src="img/dummy.png" alt="dummy"/>
                                                                </td>
                                                                <td className="order-item-name">Lorem Ipsum dolor</td>
                                                                <td className="order-qty">
                                                                    <input className="form-control" type="text" name="checkout-qty" defaultValue="1"/>
                                                                </td>
                                                                <td className="order-price">$825.00</td>
                                                                <td className="order-tax">$16.00</td>
                                                                <td className="order-total">$841.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="order-pic">
                                                                    <img src="img/dummy.png" alt="dummy"/>
                                                                </td>
                                                                <td className="order-item-name">Lorem Ipsum dolor</td>
                                                                <td className="order-qty">
                                                                    <input className="form-control" type="text" name="checkout-qty" defaultValue="1"/>
                                                                </td>
                                                                <td className="order-price">$825.00</td>
                                                                <td className="order-tax">$16.00</td>
                                                                <td className="order-total">$841.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                                <div className="mt-3">
                                                    <button className="btn btn-info" type="button" onClick={() => this.toggleAccordion(0)}>Submit Order</button>
                                                </div>
                                            </CardBody>
                                        </Collapse>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }

}

export default EcommerceCheckout;
