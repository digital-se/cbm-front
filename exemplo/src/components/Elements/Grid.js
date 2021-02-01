import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row } from 'reactstrap';

class BsGrid extends Component {

    render() {

        const grid_style = `
            .grid-example .row>.col,
            .grid-example .row>[class^=col-] {
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
                background-color: rgba(241, 242, 243, .15);
                border: 1px dashed rgba(0, 0, 0, .15);
            }
        `
        return (
            <ContentWrapper>
                <div className="content-heading">Grid</div>
                <style>{grid_style}</style>
                <Container fluid className="grid-example">
                    <p>Bootstrap includes a powerful mobile-first flexbox grid system for building layouts of all shapes and sizes. It’s based on a 12 column layout and has multiple tiers, one for each media query range. You can use it with Sass mixins or our predefined classes.</p>
                    <div className="card mb-3">
                        <div className="card-header">Auto-layout columns</div>
                        <div className="card-body">
                            <p className="my-4 text-bold" id="equal-width">Equal-width</p>
                            <div className="container">
                                <Row>
                                    <div className="col">1 of 2</div>
                                    <div className="col">1 of 2</div>
                                </Row>
                                <Row>
                                    <div className="col">1 of 3</div>
                                    <div className="col">1 of 3</div>
                                    <div className="col">1 of 3</div>
                                </Row>
                            </div>
                            <p className="my-4 text-bold" id="setting-one-column-width">Setting one column width</p>
                            <div className="container">
                                <Row>
                                    <div className="col">1 of 3</div>
                                    <div className="col-6">2 of 3 (wider)</div>
                                    <div className="col">3 of 3</div>
                                </Row>
                                <Row>
                                    <div className="col">1 of 3</div>
                                    <div className="col-5">2 of 3 (wider)</div>
                                    <div className="col">3 of 3</div>
                                </Row>
                            </div>
                            <p className="my-4 text-bold" id="variable-width-content">Variable width content</p>
                            <div className="container">
                                <Row className="justify-content-md-center">
                                    <div className="col col-xl-2">1 of 3</div>
                                    <div className="col-12 col-xl-auto">Variable width content</div>
                                    <div className="col col-xl-2">3 of 3</div>
                                </Row>
                                <Row>
                                    <div className="col">1 of 3</div>
                                    <div className="col-12 col-xl-auto">Variable width content</div>
                                    <div className="col col-xl-2">3 of 3</div>
                                </Row>
                            </div>
                            <p className="my-4 text-bold" id="equal-width-multi-row">Equal-width multi-row</p>
                            <Row>
                                <div className="col">col</div>
                                <div className="col">col</div>
                                <div className="w-100"></div>
                                <div className="col">col</div>
                                <div className="col">col</div>
                            </Row>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header">Responsive classes</div>
                        <div className="card-body">
                            <p className="my-4 text-bold" id="all-breakpoints">All breakpoints</p>
                            <Row>
                                <div className="col">col</div>
                                <div className="col">col</div>
                                <div className="col">col</div>
                                <div className="col">col</div>
                            </Row>
                            <Row>
                                <div className="col-8">col-8</div>
                                <div className="col-4">col-4</div>
                            </Row>
                            <p className="my-4 text-bold" id="stacked-to-horizontal">Stacked to horizontal</p>
                            <Row>
                                <div className="col-md-8">col-sm-8</div>
                                <div className="col-md-4">col-sm-4</div>
                            </Row>
                            <Row>
                                <div className="col-md">col-sm</div>
                                <div className="col-md">col-sm</div>
                                <div className="col-md">col-sm</div>
                            </Row>
                            <p className="my-4 text-bold" id="mix-and-match">Mix and match</p>
                            {/* Stack the columns on mobile by making one full-width and the other half-width */}
                            <Row>
                                <div className="col col-xl-8">.col .col-xl-8</div>
                                <div className="col-6 col-xl-4">.col-6 .col-xl-4</div>
                            </Row>
                            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                            <Row>
                                <div className="col-6 col-xl-4">.col-6 .col-xl-4</div>
                                <div className="col-6 col-xl-4">.col-6 .col-xl-4</div>
                                <div className="col-6 col-xl-4">.col-6 .col-xl-4</div>
                            </Row>
                            {/* Columns are always 50% wide, on mobile and desktop */}
                            <Row>
                                <div className="col-6">.col-6</div>
                                <div className="col-6">.col-6</div>
                            </Row>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header">Alignment</div>
                        <div className="card-body">
                            <p className="my-4 text-bold" id="vertical-alignment">Vertical alignment</p>
                            <div className="container">
                                <Row className="align-items-start">
                                    <div className="col">One of three columns</div>
                                    <div className="col">One of three columns</div>
                                    <div className="col">One of three columns</div>
                                </Row>
                                <Row className="align-items-center">
                                    <div className="col">One of three columns</div>
                                    <div className="col">One of three columns</div>
                                    <div className="col">One of three columns</div>
                                </Row>
                                <Row className="align-items-end">
                                    <div className="col">One of three columns</div>
                                    <div className="col">One of three columns</div>
                                    <div className="col">One of three columns</div>
                                </Row>
                            </div>
                            <div className="container">
                                <Row>
                                    <div className="col align-self-start">One of three columns</div>
                                    <div className="col align-self-center">One of three columns</div>
                                    <div className="col align-self-end">One of three columns</div>
                                </Row>
                            </div>
                            <p className="my-4 text-bold" id="horizontal-alignment">Horizontal alignment</p>
                            <div className="container">
                                <Row className="justify-content-start">
                                    <div className="col-4">One of two columns</div>
                                    <div className="col-4">One of two columns</div>
                                </Row>
                                <Row className="justify-content-center">
                                    <div className="col-4">One of two columns</div>
                                    <div className="col-4">One of two columns</div>
                                </Row>
                                <Row className="justify-content-end">
                                    <div className="col-4">One of two columns</div>
                                    <div className="col-4">One of two columns</div>
                                </Row>
                                <Row className="justify-content-around">
                                    <div className="col-4">One of two columns</div>
                                    <div className="col-4">One of two columns</div>
                                </Row>
                                <Row className="justify-content-between">
                                    <div className="col-4">One of two columns</div>
                                    <div className="col-4">One of two columns</div>
                                </Row>
                            </div>
                            <p className="my-4 text-bold" id="no-gutters">No gutters</p>
                            <Row className="no-gutters">
                                <div className="col-12 col-md-6 col-xl-8">.col-12 .col-md-6 .col-xl-8</div>
                                <div className="col-6 col-xl-4">.col-6 .col-xl-4</div>
                            </Row>
                            <p className="my-4 text-bold" id="column-wrapping">Column wrapping</p>
                            <Row>
                                <div className="col-9">.col-9</div>
                                <div className="col-4">.col-4
                                    <br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                                <div className="col-6">.col-6
                                    <br/>Subsequent columns continue along the new line.</div>
                            </Row>
                            <p className="my-4 text-bold" id="column-resets">Column resets</p>
                            <Row>
                                <div className="col-6 col-md-3">.col-6 .col-md-3</div>
                                <div className="col-6 col-md-3">.col-6 .col-md-3</div>
                                {/* Add the extra clearfix for only the required viewport */}
                                <div className="clearfix d-sm-none"></div>
                                <div className="col-6 col-md-3">.col-6 .col-md-3</div>
                                <div className="col-6 col-md-3">.col-6 .col-md-3</div>
                            </Row>
                            <Row>
                                <div className="col-md-5 col-xl-6">.col-md-5 .col-xl-6</div>
                                <div className="col-md-5 offset-sm-2 col-xl-6 offset-md-0">.col-md-5 .offset-sm-2 .col-xl-6 .offset-md-0</div>
                            </Row>
                            <Row>
                                <div className="col-md-6 col-xl-5 col-xl-6">.col.col-md-6.col-xl-5.col-xl-6</div>
                                <div className="col-md-6 col-xl-5 offset-md-2 col-xl-6 offset-lg-0">.col-md-6 .col-xl-5 .offset-md-2 .col-xl-6 .offset-lg-0</div>
                            </Row>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header">Reordering</div>
                        <div className="card-body">
                            <p className="my-4 text-bold" id="flex-order">Flex order</p>
                            <p className="my-4 text-bold" id="offsetting-columns">Offsetting columns</p>
                            <Row>
                                <div className="col-xl-4">.col-xl-4</div>
                                <div className="col-xl-4 offset-md-4">.col-xl-4 .offset-md-4</div>
                            </Row>
                            <Row>
                                <div className="col-xl-3 offset-md-3">.col-xl-3 .offset-md-3</div>
                                <div className="col-xl-3 offset-md-3">.col-xl-3 .offset-md-3</div>
                            </Row>
                            <Row>
                                <div className="col-xl-6 offset-md-3">.col-xl-6 .offset-md-3</div>
                            </Row>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header">Nesting</div>
                        <div className="card-body">
                            <Row>
                                <div className="col-md-9">Level 1: .col-md-9
                                    <Row>
                                        <div className="col-8 col-md-6">Level 2: .col-8 .col-md-6</div>
                                        <div className="col-4 col-md-6">Level 2: .col-4 .col-md-6</div>
                                    </Row>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Container>
            </ContentWrapper>
            );
    }

}

export default BsGrid;