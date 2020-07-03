import React, { Component } from 'react'
import {link, Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg text-white bg-dark">
                    <li className="navbar-brand container">
                        <Link to="/" className="nav-link">
                        Lead Manager
                        </Link>
                    </li>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-primary" href="#"> <span className="sr-only">(current)</span></a>
                            </li> 
                            <li className="nav-item text-light">
                               <Link to="/register" className="nav-link">
                                   Register
                               </Link>
                            </li>
                            <li className="nav-item ">
                               <Link to="/login" className="nav-link">
                                   Login
                               </Link>
                            </li> 
                            
                            
                        </ul>
                    
                    </div>
                </nav>
            </div>
        )
    }
}
