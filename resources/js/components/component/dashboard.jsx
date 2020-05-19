import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function dashboard(props) {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{props.mts.length}</h3>
                                    <p>MTS</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <Link
                                    to="/admin/mts"
                                    className="small-box-footer"
                                >
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{props.smk.length}</h3>
                                    <p>SMK</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                                <Link
                                    to="/admin/smk"
                                    className="small-box-footer"
                                >
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{props.user.length}</h3>
                                    <p>User</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                                <Link
                                    to="/admin/user"
                                    className="small-box-footer"
                                >
                                    More info{" "}
                                    <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default dashboard;
