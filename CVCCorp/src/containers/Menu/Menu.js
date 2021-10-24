import React from 'react';

import { List, Bell, Plus, CaretDownFill } from 'react-bootstrap-icons';
import logo from '../../assets/svg/github.svg';
import './menu.css';

import Input from '../../components/Input/Input';

const Menu = (props) => {
    return (
        <nav className="bg-grey">
            <div className="container-fluid h-100 ">
                <div className="row h-100">
                    <div className="col col-sm-4 d-md-none">
                        <button className="btn btn-outline" type="button">
                            <List />
                        </button>
                    </div>
                    <div className="col col-sm-4 col-md-10 d-flex justify-content-center justify-content-md-start align-items-center">
                        <a className="ms-md-2" href="/">
                            <img className="" src={logo} alt="github" width="32" height="32" />
                        </a>
                        <Input className="form-control expanded bg-grey ms-3 d-none d-md-block" placeholder="Search or jump to..."/>
                        <div className="d-none d-md-block">
                            <ul className="nav d-flex ">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Pull requests</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Issues</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Marketplace</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Explore</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-sm-4 d-md-none" />
                    <div className="col col-md-2 d-none d-md-block ">
                        <div className="row d-flex justify-content-end align-items-center h-100 ">
                            <div className="col-1 me-1 h-100 d-flex align-items-center">
                                <a href="https://github.com/notifications" className="d-flex text-grey-light">
                                    <Bell width="30px" height="20px" />
                                </a>
                            </div>
                            <div className="col-3 me-1 h-100 d-flex align-items-center">
                                <a href="/#" className="row text-grey-light">
                                    <div className="col-6">
                                        <Plus width="40px" height="30px" />
                                    </div>
                                    <div className="col-6">
                                        <CaretDownFill width="10px" height="10px" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-5">
                                <a href="/#" className="row text-grey-light">
                                    <div className="col-1">
                                        <img className="rounded-circle" src={props.user.avatar_url} alt="" width="22px" />
                                    </div>
                                    <div className="col-2">
                                        <CaretDownFill width="10px" height="10px" />
                                    </div>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;