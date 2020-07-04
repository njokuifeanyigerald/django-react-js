import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        const {isAuthenticated, user} = this.props.auth;

        const guestLinks =(
            <ul className="navbar-nav mr-auto">
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
        );
        const authLinks = (
            <ul className="navbar-nav mr-auto">
                <span className="navbar-text mr-3">
                    <strong className="text-capitalize text-primary">
                        {user ? `welcome ${user.username}` : ""}
                    </strong>
                </span>
                <li className="nav-item text-light">
                    <Link to="/register" className="nav-link">
                       <button onClick={this.props.logout} className="btn btn-outline-info text-light">
                           Logout
                       </button>
                    </Link>
                </li>
            </ul>
                    
        )

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
                        {isAuthenticated ? authLinks : guestLinks }
                    
                    </div>
                </nav>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout}) (Header)