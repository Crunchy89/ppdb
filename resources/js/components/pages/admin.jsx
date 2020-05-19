if (localStorage.getItem("user")) {
    require("../../../assets/dist/css/adminlte.min.css");
    require("../../../assets/dist/js/adminlte.js");
}
import React, { Component } from "react";
import Navbar from "../component/adminNav";
import Sidebar from "../component/adminSide";
import Dashboard from "../component/dashboard";
import Footer from "../component/footer";
import User from "../component/user";
import Mts from "../component/mts";
import Smk from "../component/smk";
import { Switch, Route, Redirect } from "react-router-dom";

class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false,
            mts: [],
            smk: [],
            user: []
        };
    }
    componentDidMount() {
        const user = localStorage.getItem("user");
        const url = window.location.origin;
        axios
            .get(`${url}/api/mts`)
            .then(res => this.setState({ mts: res.data.data }));
        axios
            .get(`${url}/api/smk`)
            .then(res => this.setState({ smk: res.data.data }));
        axios
            .get(`${url}/api/user`)
            .then(res => this.setState({ user: res.data.data }));
        if (!user) {
            this.setState({ logout: true });
        }
    }
    render() {
        if (this.state.logout) {
            return <Redirect to="/" />;
        }
        return (
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path="/admin">
                        <Dashboard
                            mts={this.state.mts}
                            smk={this.state.smk}
                            user={this.state.user}
                        />
                    </Route>
                    <Route path="/admin/user">
                        <User user={this.state.user} />
                    </Route>
                    <Route path="/admin/mts">
                        <Mts user={this.state.mts} />
                    </Route>
                    <Route path="/admin/smk">
                        <Smk user={this.state.smk} />
                    </Route>
                </Switch>
                <Footer />
                <aside className="control-sidebar control-sidebar-dark"></aside>
            </div>
        );
    }
}

export default admin;
