if (!localStorage.getItem("user")) {
    require("../../../assets/css/style.css");
    require("../../../assets/js/main");
}
import React, { Component } from "react";
import banner from "../../../assets/img/banner-img.png";
import { NavLink, Redirect } from "react-router-dom";
import Navbar from "../component/navbar";

class home extends Component {
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
                <div className="container mt-5">
                    <h3
                        className="animated fadeIn text-dark text-center wow"
                        data-wow-delay="0.4s"
                    >
                        Selamat Datang di PPDB Ponpes Al-Hasanain NU Beraim
                    </h3>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <p
                                    className="animated fadeInLeft mt-5 text-dark wow"
                                    data-wow-delay="0.67s"
                                >
                                    Silahkan Klik Tombol Daftar untuk Melakukan
                                    Pendaftaran Secara Online
                                </p>
                                <NavLink
                                    className="btn btn-secondary rounded-0 wow fadeInLeft animated"
                                    data-wow-delay="0.67s"
                                    to="/daftar"
                                >
                                    Daftar
                                </NavLink>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <img
                                    className="fh5co-hero-smartphone animated fadeInRight wow"
                                    data-wow-delay="1s"
                                    width="100%"
                                    src={banner}
                                    alt="banner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default home;
