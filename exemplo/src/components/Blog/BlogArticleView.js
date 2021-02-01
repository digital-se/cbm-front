import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, Table, Alert } from 'reactstrap';
// React Select
import Select from 'react-select';
// React Draft Wysiwyg
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const CATEGORIES = [
    {value: 'coding', label: 'coding'},
    {value: 'less', label: 'less'},
    {value: 'sass', label: 'sass'},
    {value: 'angularjs', label: 'angularjs'},
    {value: 'node', label: 'node'},
    {value: 'expressJS', label: 'expressJS'}
]
const TAGS = [
    {value: 'JAVASCRIPT', label: 'JAVASCRIPT'},
    {value: 'WEB', label: 'WEB'},
    {value: 'BOOTSTRAP', label: 'BOOTSTRAP'},
    {value: 'SERVER', label: 'SERVER'},
    {value: 'HTML5', label: 'HTML5'},
    {value: 'CSS', label: 'CSS'}
]
const REVIEWERS = [
    {value: 'adam@email.com', label: 'adam@email.com'},
    {value: 'amalie@email.com', label: 'amalie@email.com'},
    {value: 'wladimir@email.com', label: 'wladimir@email.com'},
    {value: 'samantha@email.com', label: 'samantha@email.com'},
    {value: 'estefanía@email.com', label: 'estefanía@email.com'},
    {value: 'natasha@email.com', label: 'natasha@email.com'},
    {value: 'nicole@email.com', label: 'nicole@email.com'},
    {value: 'adrian@email.com', label: 'adrian@email.com'}
]

// editor initial content
const blocksFromHTML = convertFromHTML('<p>Write something...</p>');
const initialEditorContent = ContentState.createFromBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap
);


class BlogArticleView extends Component {

    state = {
        categories: [],
        tags: [],
        reviewers: [],

        editorState: EditorState.createWithContent(initialEditorContent)
    }

    handleChangeSelect = (name, newVal) => {
        this.setState({
            [name]: newVal
        });
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState })
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">New Article</div>
                <Alert color="info">
                    <em className="fa fa-exclamation-circle fa-lg fa-fw"></em>
                    <span>There is an autosaved version of this article that is more recent than the version below. <a href="" className="text-white">Restore</a>
                   </span>
                </Alert>
                <Row>
                    { /* Article Content */ }
                    <Col lg={ 9 }>
                        <Card body className="card-default">
                            <form action="">
                                <input type="text" name="article-title" placeholder="Article title..." className="mb-3 form-control form-control-lg" />
                                <Editor
                                    editorState={this.state.editorState}
                                    wrapperClassName="wysiwig-editor-wrapper"
                                    editorClassName="form-control"
                                    editorStyle={{height: 300}}
                                    onEditorStateChange={this.onEditorStateChange}
                                />
                                <br/>
                                <p>Notes</p>
                                <textarea cols="6" className="mb-3 form-control"></textarea>
                                <div className="clearfix">
                                    <div className="float-left">
                                        <button type="button" className="btn btn-secondary">
                                            <em className="fa fa-edit fa-fw"></em>Draft</button>
                                        <button type="button" className="btn btn-primary m-t-10">
                                            <em className="fa fa-check fa-fw"></em>Save</button>
                                    </div>
                                    <div className="float-right">
                                        <button type="button" className="btn btn-danger">
                                            <em className="fas fa-trash-alt fa-fw"></em>Remove</button>
                                    </div>
                                </div>
                            </form>
                        </Card>
                        <p className="lead">List of Comments</p>
                        <Card>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <strong>Comment ID</strong>
                                        </th>
                                        <th>
                                            <strong>Date</strong>
                                        </th>
                                        <th>
                                            <strong>Username</strong>
                                        </th>
                                        <th>
                                            <strong>Comment excerpt</strong>
                                        </th>
                                        <th className="text-center">
                                            <strong>Current status</strong>
                                        </th>
                                        <th style={{width:"130px"}} className="text-right">
                                            <strong>Actions</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>123</td>
                                        <td>10/05/2015</td>
                                        <td><a href="">Jack Jordan</a>
                                        </td>
                                        <td>Sed quis eros libero, a euismod nisl....</td>
                                        <td className="text-center">
                                            <span className="badge badge-success">Approved</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fas fa-pencil-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <em className="fas fa-trash-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>456</td>
                                        <td>10/07/2015</td>
                                        <td><a href="">Hailey Mckinney</a>
                                        </td>
                                        <td>Nulla facilisi.</td>
                                        <td className="text-center">
                                            <span className="badge badge-success">Approved</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fas fa-pencil-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <em className="fas fa-trash-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>789</td>
                                        <td>11/05/2015</td>
                                        <td><a href="">Peyton Reyes</a>
                                        </td>
                                        <td>Quisque enim nisi, semper non pulvinar et, aliquam id lorem...</td>
                                        <td className="text-center">
                                            <span className="badge badge-warning">Pending</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fas fa-pencil-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <em className="fas fa-trash-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>999</td>
                                        <td>10/06/2015</td>
                                        <td><a href="">Darryl Harper</a>
                                        </td>
                                        <td>Nulla facilisi.</td>
                                        <td className="text-center">
                                            <span className="badge badge-danger">Rejected</span>
                                        </td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fas fa-pencil-alt"></em>
                                            </button>
                                            <button type="button" disabled="" className="btn btn-sm btn-danger">
                                                <em className="fas fa-trash-alt"></em>
                                            </button>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <em className="fa fa-check"></em>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    { /* Article sidebar */ }
                    <Col lg={ 3 }>
                        <Card body className="card-default">
                            <p className="lead">Article Data</p>
                            <p>Categories</p>
                            <Select
                                name="categories"
                                multi
                                simpleValue
                                value={this.state.categories}
                                onChange={this.handleChangeSelect.bind(this, 'categories')}
                                options={CATEGORIES}
                            />
                            <p className="mt-2">Tags</p>
                            <Select
                                name="tags"
                                multi
                                simpleValue
                                value={this.state.tags}
                                onChange={this.handleChangeSelect.bind(this, 'tags')}
                                options={TAGS}
                            />
                            <p className="mt-2">Reviewers</p>
                            <Select
                                name="reviewers"
                                multi
                                simpleValue
                                value={this.state.reviewers}
                                onChange={this.handleChangeSelect.bind(this, 'reviewers')}
                                options={REVIEWERS}
                            />
                            <p className="lead mt-3">SEO Metadata</p>
                            <div className="form-group">
                                <p>Title</p>
                                <input type="text" placeholder="Brief description.." className="form-control" />
                            </div>
                            <div className="form-group">
                                <p>Description</p>
                                <textarea rows="5" placeholder="Max 255 characters..." className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <p>Keywords</p>
                                <textarea rows="5" placeholder="Max 1000 characters..." className="form-control"></textarea>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

export default BlogArticleView;
