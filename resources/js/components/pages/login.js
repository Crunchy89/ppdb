import React, { Component } from "react";

class login extends Component {
    render() {
        return (
            <div
                className="col-lg-4 col-md-4 col-sm-10 mx-auto animated fadeInRight wow mt-5"
                data-wow-delay="0.4s"
            >
                <div className="card p-2">
                    <div className="container">
                        <form>
                            <h3 className="text-center mt-3 mb-5">
                                Admin Login
                            </h3>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    name="username"
                                    id="username"
                                    placeholder="Masukkan Username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    name="password"
                                    id="password"
                                    placeholder="Masukkan Password"
                                />
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
