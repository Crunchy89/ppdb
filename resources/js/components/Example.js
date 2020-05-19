import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Daftar from "./pages/daftar";
import Cetak from "./pages/cetak";
import Mts from "./pages/mts";
import Smk from "./pages/smk";
import Admin from "./pages/admin";
import "../../assets/css/animate.css";
import "../../assets/css/owl.theme.default.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Example extends Component {
    render() {
        return (
            <>
                <div id="fh5co-hero-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/daftar" component={Daftar} />
                        <Route path="/cetak" component={Cetak} />
                        <Route path="/mts" component={Mts} />
                        <Route path="/smk" component={Smk} />
                        <Route path="/admin" component={Admin} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default Example;
ReactDOM.render(
    <Router>
        <Example />
    </Router>,
    document.getElementById("app")
);
