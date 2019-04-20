import React from "react";
import Index from "../components/Index.jsx"
import About from "../components/About.jsx"
import Features from "../components/Features.jsx"
import Docs from "../components/Docs.jsx"
import License from "../components/License.jsx"
import Contact from "../components/Contact.jsx"

import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
import routes from "../components/Routes.jsx"

function RouteWithSubRoutes(route) {
    return (
        <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
        />
    );
}

class Header extends React.Component {
  render () {
    return (
        <Router history={browserHistory}>  
            <header id="header" className="header">  
                <div className="container">            
                    <h1 className="logo pull-left">
                        <a className="scrollto" href="#promo">
                            <span className="logo-title">###</span>
                        </a>
                    </h1>           
                    <nav id="main-nav" className="main-nav navbar-right" role="navigation">
                        <div className="navbar-header">
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>         
                        <div className="navbar-collapse collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
                                <li className="nav-item"><Link to="/docs" className="nav-link">Docs</Link></li>
                                <li className="nav-item"><Link to="/license" className="nav-link">License</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link" innerRef={node => {}}>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Router>
    );
  }
}

export default Header;