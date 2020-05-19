import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class adminNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        localStorage.clear();
        this.setState({ logout: true });
    }
    render() {
        if (this.state.logout) {
            window.location.href = "/";
        }
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="pushmenu"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button
                            className="nav-link btn btn-danger rounded-0"
                            onClick={this.handleLogout}
                        >
                            Keluar <i className="far fa-user"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default adminNav;
