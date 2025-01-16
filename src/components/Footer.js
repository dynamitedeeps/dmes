import React from "react";
import logo from '../assets/images/dmesLogo.webp';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <footer>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-2">
                       <Link className="/">
                            <img style={{ height: "100px", width: "auto" }} src={logo} />
                       </Link>
                    </div>
                    <div className="col-5">
                        <ul className="list-group">
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">About us</li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <ul className="list-group">
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">About us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;