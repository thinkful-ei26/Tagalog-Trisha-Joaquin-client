import React from 'react';
// import LandingHeader from './landing-header';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            {/* <LandingHeader /> */}
            <div className="image">
                <h1>Tagalog Teacher</h1>
            </div>
            <h2>Sign Up</h2>
            <RegistrationForm />
            <Link to="/" className="login-link">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
