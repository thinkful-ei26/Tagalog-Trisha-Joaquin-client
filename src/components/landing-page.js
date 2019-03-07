import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import '../styles/landing-page.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    localStorage.setItem("loggedIn", true);
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <div className="image">
        <h1>Tagalog Teacher</h1>
        <button 
          className="learn-more-btn"
          onClick={() => console.log('LearnMore was clicked')}
        >
          Learn More
        </button>
      </div>
      <fieldset>
        <legend> Welcome</legend>
        <p>
          This is a language learning app to help get you on your way to
          learning Tagalog, one of the Philippines' national languages.
        </p>
        <p>
          We use <a href='https://en.wikipedia.org/wiki/Spaced_repetition'>spaced repetition</a> training, a
          technique to help you better master and retain new information.
        </p>
        <p> You will be shown a Tagalog word. See if you can enter the corresponding English translation of the word.</p>
      </fieldset>

      <LoginForm />
      <Link to="/register" className="register-link">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
