import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';

const Typography = () => (
    <ContentWrapper>
        <div className="content-heading">Typography</div>
        {/* START row */}
        <div className="row">
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Headings</div>
                    <div className="card-body">
                        <h1>Heading 1
                            <small>Sub-heading</small>
                        </h1>
                        <h2>Heading 2
                            <small>Sub-heading</small>
                        </h2>
                        <h3>Heading 3
                            <small>Sub-heading</small>
                        </h3>
                        <h4>Heading 4
                            <small>Sub-heading</small>
                        </h4>
                        <h5>Heading 5
                            <small>Sub-heading</small>
                        </h5>
                        <h6>Heading 6
                            <small>Sub-heading</small>
                        </h6>
                    </div>
                </div>
                {/* END card */}
            </div>
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Paragraphs</div>
                    <div className="card-body">
                        <p className="lead">This is an example of lead body copy.</p>
                        <p>This is an example of standard paragraph text. This is an example of
                            <a href="">link anchor text</a>within body copy.</p>
                        <p>
                            <small>This is an example of small, fine print text.</small>
                        </p>
                        <p>
                            <strong>This is an example of strong, bold text.</strong>
                        </p>
                        <p>
                            <em>This is an example of emphasized, italic text.</em>
                        </p>
                        <br/>
                        <h4>Alignment Helpers</h4>
                        <p className="text-left">Left aligned text.</p>
                        <p className="text-center">Center aligned text.</p>
                        <p className="text-right">Right aligned text.</p>
                    </div>
                </div>
                {/* END card */}
            </div>
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Emphasis Classes</div>
                    <div className="card-body">
                        <p className="text-muted">This is an example of muted text.</p>
                        <p className="text-primary">This is an example of primary text.</p>
                        <p className="text-success">This is an example of success text.</p>
                        <p className="text-info">This is an example of info text.</p>
                        <p className="text-warning">This is an example of warning text.</p>
                        <p className="text-danger">This is an example of danger text.</p>
                    </div>
                </div>
                {/* END card */}
            </div>
        </div>
        {/* END row */}
        {/* START row */}
        <div className="row">
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Abbreviations</div>
                    <div className="card-body">
                        <p>The abbreviation of the word attribute is
                            <abbr title="attribute">attr</abbr>.</p>
                        <p>
                            <abbr className="initialism" title="HyperText Markup Language">HTML</abbr>is an abbreviation for a programming language.</p>
                        <br/>
                        <h4>Addresses</h4>
                        <address>
                            <strong>Twitter, Inc.</strong>
                            <br/>795 Folsom Ave, Suite 600
                            <br/>San Francisco, CA 94107
                            <br/>
                            <abbr title="Phone">P:</abbr>(123) 456-7890</address>
                        <address>
                            <strong>Full Name</strong>
                            <br/>
                            <a href="mailto:#">first.last@example.com</a>
                        </address>
                    </div>
                </div>
                {/* END card */}
            </div>
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Blockquotes</div>
                    <div className="card-body">
                        <h4>Default Blockquote</h4>
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <h4>Blockquote with Citation</h4>
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <small>Someone famous in
                                <cite title="Source Title">Source Title</cite>
                            </small>
                        </blockquote>
                        <h4>Right Aligned Blockquote</h4>
                        <blockquote className="float-right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                    </div>
                </div>
                {/* END card */}
            </div>
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Lists</div>
                    <div className="card-body">
                        <h4>Unordered List</h4>
                        <ul>
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>
                                <ul>
                                    <li>List Item</li>
                                    <li>List Item</li>
                                    <li>List Item</li>
                                </ul>
                            </li>
                            <li>List Item</li>
                        </ul>
                        <h4>Ordered List</h4>
                        <ol>
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                        </ol>
                        <h4>Unstyled List</h4>
                        <ul className="list-unstyled">
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                        </ul>
                        <h4>Inline List</h4>
                        <ul className="list-inline">
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                        </ul>
                    </div>
                </div>
                {/* END card */}
            </div>
        </div>
        {/* END row */}
        {/* START row */}
        <div className="row">
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Description Lists</div>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-sm-3">Description lists</dt>
                            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                            <dt className="col-sm-3">Euismod</dt>
                            <dd className="col-sm-9">
                                <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                <p>Donec id elit non mi porta gravida at eget metus.</p>
                            </dd>
                            <dt className="col-sm-3">Malesuada porta</dt>
                            <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                            <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                            <dt className="col-sm-3">Nesting</dt>
                            <dd className="col-sm-9">
                                <dl className="row">
                                    <dt className="col-sm-4">Nested definition list</dt>
                                    <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                </dl>
                            </dd>
                        </dl>
                    </div>
                </div>
                {/* END card */}
            </div>
            <div className="col-xl-4">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header">Code</div>
                    <div className="card-body">
                        <p>This is an example of an inline code element within body copy. Wrap inline code within a
                            <code>
                                <code>...</code>
                            </code>tag.</p>
                        <pre>\nThis is an example of preformatted text.</pre>
                    </div>
                </div>
                {/* END card */}
            </div>
        </div>
        {/* END row */}
    </ContentWrapper>
)

export default Typography;
