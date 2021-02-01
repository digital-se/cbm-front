import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => (
    <div className="abs-center wd-xl">
        <div className="text-center mb-4">
            <div className="text-lg mb-3">404</div>
            <p className="lead m-0">We couldn't find this page.</p>
            <p>The page you are looking for does not exists.</p>
        </div>
        <div className="input-group mb-4">
            <input className="form-control" type="text" placeholder="Try with a search"/>
            <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">
                    <em className="fa fa-search"></em>
                </button>
            </span>
        </div>
        <ul className="list-inline text-center text-sm mb-4">
            <li className="list-inline-item">
                <Link to="dashboard" className="text-muted">Go to App</Link>
            </li>
            <li className="text-muted list-inline-item">|</li>
            <li className="list-inline-item">
                <Link to="login" className="text-muted">Login</Link>
            </li>
            <li className="text-muted list-inline-item">|</li>
            <li className="list-inline-item">
                <Link to="register" className="text-muted">Register</Link>
            </li>
        </ul>
        <div className="p-3 text-center">
            <span className="mr-2">&copy;</span>
            <span>2020</span>
            <span className="mx-2">-</span>
            <span>Angle</span>
            <br/>
            <span>Bootstrap Admin Template</span>
        </div>
    </div>
)

export default NotFound;

