import React, { Component } from "react";
import { Link } from "react-router-dom";
import smk2 from "../../../assets/img/smk2.png";
import smk from "../../../assets/img/smk.png";
import { Redirect } from "react-router-dom";
import Navbar from "../component/navbar";

class daftar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
    }
    componentDidMount() {
        const user = localStorage.getItem("user");
        if (user) {
            this.setState({ login: true });
        }
    }
    render() {
        if (this.state.login) {
            return <Redirect to="/admin" />;
        }
        return (
            <>
                <Navbar />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-4 col-sm-10 mx-auto animated fadeInLeft wow"
                            data-wow-delay="0.4s"
                        >
                            <Link className="nav-link" to="/mts">
                                <img
                                    src={smk2}
                                    alt="mts"
                                    className="img-fluid"
                                />
                                <h3 className="text-center">Daftar MTS</h3>
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-10 mx-auto animated fadeInRight wow"
                            data-wow-delay="0.4s"
                        >
                            <Link className="nav-link" to="/smk">
                                <img
                                    src={smk}
                                    alt="smk"
                                    className="img-fluid"
                                />
                                <h3 className="text-center">Daftar SMK</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default daftar;
