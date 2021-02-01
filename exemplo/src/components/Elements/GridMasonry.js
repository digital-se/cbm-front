import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { CardColumns } from 'reactstrap';

class GridMasonry extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="container">
                    <p>
                        <strong className="mr-1">Cards</strong>can be organized into Masonry-like columns with just CSS by wrapping them in
                        <code>.card-columns.</code>Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.
                    </p>
                    <CardColumns>
                        <div className="card mb-4">
                            <img className="card-img-top img-fluid" src="img/bg1.jpg" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Card title that wraps to a new line</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card p-3 mb-4">
                            <blockquote className="card-body mb-0 p-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>
                                    <div className="text-sm text-muted">Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card mb-4">
                            <img className="card-img-top img-fluid" src="img/bg2.jpg" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text">
                                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                                </p>
                            </div>
                        </div>
                        <div className="card bg-inverse p-3 text-center mb-4 border-0">
                            <blockquote className="mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer>
                                    <div className="text-sm">Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card text-center mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text">
                                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                                </p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <img className="card-img img-fluid" src="img/bg3.jpg" alt="Card"/>
                        </div>
                        <div className="card p-3 text-right mb-4">
                            <blockquote className="mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>
                                    <div className="text-sm text-muted">Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text">
                                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                                </p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <img className="card-img-top img-fluid" src="img/bg1.jpg" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Card title that wraps to a new line</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card bg-inverse bg-primary p-3 text-center mb-4">
                            <blockquote className="mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer>
                                    <div className="text-sm">Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card mb-4">
                            <img className="card-img-top img-fluid" src="img/bg4.jpg" alt="Card cap"/>
                        </div>
                        <div className="card bg-inverse p-3 text-center mb-4">
                            <blockquote className="mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer>
                                    <div className="text-sm">Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </CardColumns>
                </div>
            </ContentWrapper>
            );
    }

}

export default GridMasonry;