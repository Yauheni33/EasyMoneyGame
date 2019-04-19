import React from "react";

class Header extends React.Component {
  render () {
    return (
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
                        <li className="active nav-item sr-only"><a className="scrollto" href="#promo">Home</a></li>
                        <li className="nav-item"><a className="scrollto" href="#about">About</a></li>
                        <li className="nav-item"><a className="scrollto" href="#features">Features</a></li>
                        <li className="nav-item"><a className="scrollto" href="#docs">Docs</a></li>
                        <li className="nav-item"><a className="scrollto" href="#license">License</a></li>                        
                        <li className="nav-item last"><a className="scrollto" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
  }
}

export default Header;
