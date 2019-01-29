import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
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
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
