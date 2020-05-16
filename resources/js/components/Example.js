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
import Admin from "./pages/admin";
import "../../assets/css/animate.css";
import "../../assets/css/owl.theme.default.min.css";
import "../../assets/css/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

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
                <Route path="/admin" component={Admin} />
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
