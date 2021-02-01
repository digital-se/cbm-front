import React, { Component } from 'react';

class Recover extends Component {

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            <img className="block-center rounded" src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">PASSWORD RESET</p>
                        <form>
                            <p className="text-center">Fill with your mail to receive instructions on how to reset your password.</p>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="resetInputEmail1">Email address</label>
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="resetInputEmail1" type="email" placeholder="Enter email" autoComplete="off"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-danger btn-block" type="button">Reset</button>
                        </form>
                    </div>
                </div>
                {/* END card */}
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

export default Recover;
