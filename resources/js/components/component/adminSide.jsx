import React, { Component } from "react";
import Logo from "../../../assets/img/logo2.png";
import { NavLink, Link } from "react-router-dom";

class adminSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        localStorage.clear();
        this.setState({ logout: true });
    }
    render() {
        if (this.state.logout) {
            window.location.href = "/";
        }
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="brand-link">
                    <Link to="/admin" className="brand-link">
                        <img
                            src={Logo}
                            alt="AdminLTE Logo"
                            className="brand-image elevation-3"
                            style={{ opacity: 0.8 }}
                        />
                        <span className="brand-text font-weight-light">
                            PPDB
                        </span>
                    </Link>
                </div>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="info">
                            <Link to="/admin" className="d-block">
                                Admin
                            </Link>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">
                                    <i className="nav-icon fa fa-fw fa-user-secret"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/user" className="nav-link">
                                    <i className="nav-icon far fa-fw fa-user"></i>
                                    <p>Users</p>
                                </Link>
                            </li>
                            <li className="nav-header">Menu PPDB</li>
                            <li className="nav-item">
                                <Link to="/admin/mts" className="nav-link">
                                    <i className="nav-icon fa fa-fw fa-users"></i>
                                    <p>MTS</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/smk" className="nav-link">
                                    <i className="nav-icon fa fa-fw fa-users"></i>
                                    <p>SMK</p>
                                </Link>
                            </li>
                            <li className="nav-header">Menu PPDB</li>
                            <li className="nav-item">
                                <a
                                    href="/"
                                    className="nav-link"
                                    onClick={this.handleClick}
                                >
                                    <i className="nav-icon fa fa-fw fa-sign-out-alt"></i>
                                    <p>Logout</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default adminSide;
