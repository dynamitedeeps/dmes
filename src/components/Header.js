import React from "react";
import logo from '../assets/images/dmesLogo.webp';
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} style={{ height: "100px", width: "auto" }} className="img-thumbnail rounded App-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/parts">Parts</Link>
                                <Link className="dropdown-item" to="/new-machines">New Machines</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/technical-consultation">Technical Consultation</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Header;