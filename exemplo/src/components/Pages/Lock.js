import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lock extends Component {

    render() {
        return (
            <div className="abs-center wd-xl">
                <div className="d-flex justify-content-center">
                    <div className="p-2">
                        <img className="img-fluid img-thumbnail rounded-circle" src="img/user/02.jpg" alt="Avatar" width="60" height="60"/>
                    </div>
                </div>
                <div className="card b0">
                    <div className="card-body">
                        <p className="text-center">Please login to unlock your screen.</p>
                        <form>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="exampleInputEmail1" type="email" placeholder="Enter email" autoComplete="off" required/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-lock"></em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="mt-1">
                                    <Link to="recover" className="text-muted">
                                        <small>Forgot your password?</small>
                                    </Link>
                                </div>
                                <div className="ml-auto">
                                    <Link to="dashboard" className="btn btn-sm btn-primary">Unlock</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="p-3 text-center">
                    <span className="mr-2">&copy;</span>
                    <span>2020</span>
                    <span className="mx-2">-</span>
                    <span>Angle</span>
                    <br/>
                    <span>Bootstrap Admin Template</span>
                </div>
            </div>
        );
    }
}

export default Lock;

