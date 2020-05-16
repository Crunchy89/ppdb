import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",
                password: ""
            },
            errors: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        const { data, errors } = this.state;
        this.setState({ ...(data[name] = value) });
        this.setState({ ...(errors[name] = null) });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { data } = this.state;
        const file = new FormData();
        for (let i in data) {
            file.append(i, data[i]);
        }
        const url = window.location.origin;
        axios
            .post(`${url}/api/user/login`, file)
            .then(res => {
                if (res.data.success == true) {
                    swal({
                        title: res.data.title,
                        text: res.data.pesan,
                        icon: res.data.icon
                    });
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                } else {
                    swal({
                        title: res.data.title,
                        text: res.data.pesan,
                        icon: res.data.icon
                    });
                    if (res.data.data) {
                        this.setState({ errors: res.data.data });
                    }
                }
            })
            .catch(res => console.log(res.status));
    }
    render() {
        // if(localStorage.getItem('user')){
        //     return <Redirect to="/admin"/>
        // }
        return (
            <div
                className="col-lg-4 col-md-4 col-sm-10 mx-auto animated fadeInRight wow mt-5"
                data-wow-delay="0.4s"
            >
                <div className="card p-2">
                    <div className="container">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <h3 className="text-center mt-3 mb-5">
                                Admin Login
                            </h3>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            this.state.errors.username
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="username"
                                        name="username"
                                        placeholder="Masukkan Nama Lengkap"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {this.state.errors.username}
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="password">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            this.state.errors.password
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="password"
                                        name="password"
                                        placeholder="Masukkan Nama Lengkap"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {this.state.errors.password}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-danger w-100 rounded-0 mb-3 mt-3"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;
