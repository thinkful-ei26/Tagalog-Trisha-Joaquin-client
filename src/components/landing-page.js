import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { learnMoreClick, backClick } from '../actions/info';
import LoginForm from './login-form';
import HeaderBar from './header-bar';
import '../styles/landing-page.css';
import '../styles/info.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    localStorage.setItem("loggedIn", true);
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <HeaderBar />
      {/* <div className="image">
        <h1>Tagalog Teacher</h1>
        <button
          className="info-btn" href="#info"
          aria-label="How to use this app"
          onClick={ () => {
            props.dispatch(learnMoreClick()) 
            }
          }
        >
          <span className="info-text">Learn More</span>
        </button>
      </div>
      <div className="ombre-bar"></div> */}

      {props.learnMore ? (
        <section className="info-overlay">
          <div className="info-contents">
            <h2>Welcome to Tagalog Teacher!</h2>
            <p>
              This is a language learning app to help get you on your way to learning Tagalog, one of the Philippines' national languages.
            </p>
            <p>
              We use spaced repetition training, a technique to help you better master and retain new information.

              You will be shown a Tagalog word. See if you can enter the corresponding English translation of the word.
            </p>
            <button
              className="close-btn"
              aria-label="Close learn more info"
              onClick={ () => {
                localStorage.clear();
                props.dispatch(backClick()) 
                }
              }
            >
            <span className="close-text">Close</span>
            </button>
          </div>
        </section>
      ) : null }
      
      <LoginForm />
      <Link to="/register" className="register-link">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  learnMore: state.info.learnMore
});

export default connect(mapStateToProps)(LandingPage);
