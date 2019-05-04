import React from "react";

import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
import routes from "../components/Routes.jsx"
import { history } from '../components/_helpers';
import { alertActions } from '../components/_actions';
import { PrivateRoute } from '../components/_components';
import { HomePage } from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';
import {Button} from 'react-bootstrap'

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
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  render () {
    const { alert } = this.props;
    return (
        <Router history={history}>  
            <header id="header" className="header" style={{position: "inherit"}}>  
                <div className="container">            
                    <h1 className="logo pull-left">
                        <a className="scrollto" href="#promo">
                            <span className="logo-title">EasyMoneyGame</span>
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
                                <Button style={{marginTop: "5px", height: "36px"}}><Route path="/login" component={LoginPage} />Login</Button>
                                <Button style={{marginTop: "5px", height: "36px", marginLeft: "15px"}}><Route path="/register" component={RegisterPage} />Register</Button>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
            </div>
        </Router>
    );
  }
}

export default Header;