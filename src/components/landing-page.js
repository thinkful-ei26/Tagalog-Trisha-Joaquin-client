import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import HeaderBar from './header-bar';
import Info from './info';
import '../styles/landing-page.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    localStorage.setItem("loggedIn", true);
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <HeaderBar />
      <Info />
      
      <div className="login-container">
        <LoginForm />
        <Link to="/register" className="register-link">Register</Link>
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
