import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class EcommerceProductView extends Component {

    state = {
        activeTab: 'edit'
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Product #000123</div>
                <Card>
                    <form className="ie-fix-flex">
                        <div role="tabpanel">
                            <Nav tabs justified>
                                <NavItem>
                                    <NavLink href="#edit" className={ this.state.activeTab === 'edit' ? 'active':'' }
                                            onClick={() => { this.toggleTab('edit'); }}
                                    >
                                        Product Edit</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#seo" className={ this.state.activeTab === 'seo' ? 'active':'' }
                                            onClick={() => { this.toggleTab('seo'); }}
                                    >
                                        SEO Metadata</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#picture" className={ this.state.activeTab === 'picture' ? 'active':'' }
                                            onClick={() => { this.toggleTab('picture'); }}
                                    >
                                        Pictures</NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="edit" role="tabpanel">
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Name:</label>
                                            <div className="col-lg-10">
                                                <input className="form-control" type="text" placeholder="Product name.."/>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Description:</label>
                                            <div className="col-lg-10">
                                                <textarea className="form-control" cols="5" placeholder="Short description.."></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Price:</label>
                                            <div className="col-lg-10">
                                                <input className="form-control" type="text" placeholder="$ 123.20"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Quantity:</label>
                                            <div className="col-lg-10">
                                                <input className="form-control" type="number" placeholder="0" min="0"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Tax :</label>
                                            <div className="col-lg-10">
                                                <input className="form-control" type="text" placeholder="20%"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Status:</label>
                                            <div className="col-lg-10">
                                                <select className="form-control">
                                                    <option value="">Select..</option>
                                                    <option value="0">Public</option>
                                                    <option value="1">Pending</option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                </TabPane>
                                <TabPane tabId="seo" role="tabpanel">
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Title</label>
                                            <div className="col-lg-10">
                                                <input className="form-control" type="text" placeholder="Brief description.."/>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Description</label>
                                            <div className="col-lg-10">
                                                <textarea className="form-control" rows="5" placeholder="Max 255 characters..."></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row">
                                            <label className="col-lg-2 col-form-label">Keywords</label>
                                            <div className="col-lg-10">
                                                <textarea className="form-control" rows="5" placeholder="Max 1000 characters..."></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
                                </TabPane>
                                <TabPane tabId="picture" role="tabpanel">
                                    <div className="row mb-3">
                                        <div className="col-3">
                                            <strong>Preview</strong>
                                        </div>
                                        <div className="col-9">
                                            <strong>Details</strong>
                                        </div>
                                    </div>
                                    <div className="row mb-3 pb-3 bb">
                                        <div className="col-6 col-md-3">
                                            <a href="" title="Product 1">
                                                <img className="img-fluid" src="img/bg7.jpg" alt="Product 1"/>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-9">
                                            <fieldset>
                                                <div className="form-group row">
                                                    <input className="form-control" type="text" placeholder="Brief description.."/>
                                                </div>
                                            </fieldset>
                                            <p>
                                                <strong>Picture type</strong>
                                            </p>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod1-pic" value="option1" defaultChecked/>
                                                    <span></span>Primary</label>
                                            </div>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod1-pic" value="option2"/>
                                                    <span></span>Thumbnail</label>
                                            </div>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod1-pic" value="option3"/>
                                                    <span></span>Gallery</label>
                                            </div>
                                            <div className="text-right">
                                                <button className="btn btn-sm btn-danger" type="button">
                                                    <em className="fa fa-times-circle fa-fw"></em>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3 pb-3 bb">
                                        <div className="col-6 col-md-3">
                                            <a href="" title="Product 2">
                                                <img className="img-fluid" src="img/bg8.jpg" alt="Product 1"/>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-9">
                                            <fieldset>
                                                <div className="form-group row">
                                                    <input className="form-control" type="text" placeholder="Brief description.."/>
                                                </div>
                                            </fieldset>
                                            <p>
                                                <strong>Picture type</strong>
                                            </p>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod2-pic" value="option1" defaultChecked/>
                                                    <span></span>Primary</label>
                                            </div>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod2-pic" value="option2"/>
                                                    <span></span>Thumbnail</label>
                                            </div>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod2-pic" value="option3"/>
                                                    <span></span>Gallery</label>
                                            </div>
                                            <div className="text-right">
                                                <button className="btn btn-sm btn-danger" type="button">
                                                    <em className="fa fa-times-circle fa-fw"></em>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3 pb-3">
                                        <div className="col-6 col-md-3">
                                            <a href="" title="Product 3">
                                                <img className="img-fluid" src="img/bg10.jpg" alt="Product 1"/>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-9">
                                            <fieldset>
                                                <div className="form-group row">
                                                    <input className="form-control" type="text" placeholder="Brief description.."/>
                                                </div>
                                            </fieldset>
                                            <p>
                                                <strong>Picture type</strong>
                                            </p>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod3-pic" value="option1" defaultChecked/>
                                                    <span></span>Primary</label>
                                            </div>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod3-pic" value="option2"/>
                                                    <span></span>Thumbnail</label>
                                            </div>
                                            <div className="c-radio c-radio-nofont">
                                                <label>
                                                    <input type="radio" name="prod3-pic" value="option3"/>
                                                    <span></span>Gallery</label>
                                            </div>
                                            <div className="text-right">
                                                <button className="btn btn-sm btn-danger" type="button">
                                                    <em className="fa fa-times-circle fa-fw"></em>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </form>
                </Card>
                <div className="text-right mt-3">
                    <button className="btn btn-warning mr-2" type="button">Discard</button>
                    <button className="btn btn-success" type="button">Save</button>
                </div>
            </ContentWrapper>
            );
    }

}

export default EcommerceProductView;
