import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Daftar from "./pages/daftar";
import Cetak from "./pages/cetak";
import Mts from "./pages/mts";
import Smk from "./pages/smk";
import "../../assets/css/animate.css";
import "../../assets/css/owl.theme.default.min.css";
import "../../assets/css/style.css";

function Example() {
    return (
        <div id="fh5co-hero-wrapper">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/daftar" component={Daftar} />
                <Route path="/cetak" component={Cetak} />
                <Route path="/mts" component={Mts} />
                <Route path="/smk" component={Smk} />
            </Switch>
        </div>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Router>
            <Example />
        </Router>,
        document.getElementById("app")
    );
}
