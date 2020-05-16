import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import logoa from "../../../assets/img/logo2.png";

class navbar extends Component {
    render() {
        return (
            <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={logoa}
                        alt="logo"
                        className="mr-2"
                        height="60px"
                    />
                    <img src={logo} alt="logo" height="60px" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav nav-items-center ml-auto mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/daftar">
                                Daftar / Isi Form Pendaftaran
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cetak">
                                Cetak Form Pendaftaran
                            </NavLink>
                        </li>
                    </ul>
                    <div className="social-icons-header">
                        <NavLink
                            className="btn btn-danger rounded-0"
                            to="/login"
                        >
                            Login Admin
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default navbar;
