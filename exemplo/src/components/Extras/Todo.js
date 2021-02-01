import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';

class Todo extends Component {
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Todo List
                        <small>Keeping track of tasks</small>
                    </div>
                    <button className="ml-auto btn btn-danger">Clear All Items</button>
                </div>
                <div className="row todo">
                    <div className="col-lg-3">
                        <div className="pr-3">
                            <form className="mb-4">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Task title.." required/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Type a description.." rows="8"></textarea>
                                </div>
                                <button className="btn btn-primary btn-block" type="submit">Add Todo</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-9 todo-item-list">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="card mb-0 todo-item todo-complete">
                                <div className="card-header">
                                    <p className="text-bold mb-0">
                                        <span className="clickable" role="button">
                                            <span className="close">&times;</span>
                                            <span className="inline checkbox c-checkbox">
                                                <label>
                                                    <input id="todo-item-0" type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </span>
                                            <span className="todo-title">Meeting with Mark at 7am.</span>
                                            <span className="todo-edit fas fa-pencil-alt"></span>
                                        </span>
                                    </p>
                                </div>
                                <div className="collapse" id="collapseOne">
                                    <div className="card-body">
                                        <p>
                                            <span>Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-0 todo-item">
                                <div className="card-header">
                                    <p className="text-bold mb-0">
                                        <span className="clickable collapsed" role="button">
                                            <span className="close">&times;</span>
                                            <span className="inline checkbox c-checkbox">
                                                <label>
                                                    <input id="todo-item-1" type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </span>
                                            <span className="todo-title">Call Sonya. Talk about the new project.</span>
                                            <span className="todo-edit fas fa-pencil-alt"></span>
                                        </span>
                                    </p>
                                </div>
                                <div className="collapse show" id="collapseTwo">
                                    <div className="card-body">
                                        <p>
                                            <span className="text-muted">No item description</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-0 todo-item">
                                <div className="card-header">
                                    <p className="text-bold mb-0">
                                        <span className="clickable collapsed" role="button">
                                            <span className="close">&times;</span>
                                            <span className="inline checkbox c-checkbox">
                                                <label>
                                                    <input id="todo-item-2" type="checkbox"/>
                                                    <span className="fa fa-check"></span>
                                                </label>
                                            </span>
                                            <span className="todo-title">Find a new place for vacations</span>
                                            <span className="todo-edit fas fa-pencil-alt"></span>
                                        </span>
                                    </p>
                                </div>
                                <div className="collapse" id="collapseThree">
                                    <div className="card-body">
                                        <p>
                                            <span className="text-muted">No item description</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-right">
                            <span>1 Completed</span>-
                            <span>2 Pending</span>
                        </p>
                    </div>
                </div>
            </ContentWrapper>
            );
    }

}

export default Todo;
