import React from 'react';
import HeaderBar from './header-bar';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Info from './info';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <HeaderBar />
            <Info/>
            <h2>Register</h2>
            <RegistrationForm />
            <Link to="/" className="login-link">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    learnMore: state.info.learnMore
});

export default connect(mapStateToProps)(RegistrationPage);
