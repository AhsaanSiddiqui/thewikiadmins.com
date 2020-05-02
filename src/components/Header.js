import React, { Component } from 'react';
import logo from '../images/logo.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col lgo">
                            <Link to="/">
                                <img src={logo} className="img-fluid" alt="The Wikipedia Admins" />
                            </Link>
                        </div>
                        <div className="col-lg-7 col-xl-7 col-md-9 col-sm-9 col">
                            <div className="menu-bar">
                                <nav className="navbar  navbar-expand-lg navbar-light">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <ul className="navbar-nav">
                                            <li>
                                                <Link className="nav-item nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown">
                                                Services
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <Link className="dropdown-item" to="./research-and-copywriting">Research and Copywriting</Link>
                                                    <Link className="dropdown-item" to="./page-translation">Page Translation</Link>
                                                    <Link className="dropdown-item" to="./page-creation">Page Creation</Link>
                                                    <Link className="dropdown-item" to="./updating-pages">Updating Pages</Link>
                                                    <Link className="dropdown-item" to="./page-editing">Page Editing</Link>
                                                    <Link className="dropdown-item" to="./maintenance-and-monitoring">Maintenance and Monitoring</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link className="nav-item nav-link" to="./about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link className="nav-item nav-link" to="javascript:;">Packages</Link>
                                            </li>
                                            <li>
                                                <Link className="nav-item nav-link" to="./why-choose-us">Why Choose Us</Link>
                                            </li>
                                            <li>
                                                <Link className="nav-item nav-link" to="./contact-us">Contact</Link>
                                            </li> 
                                            
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
