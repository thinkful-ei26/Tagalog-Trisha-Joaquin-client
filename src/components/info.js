import React from 'react';
import { learnMoreClick, backClick } from '../actions/info';
import {connect} from 'react-redux';
import '../styles/info.css';

export function Info(props) {

  return (
    <div className="info-container">
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

      {props.learnMore ? (
        <section className="info-overlay">
          <div className="info-contents">
            <h2>Welcome to Tagalog Teacher!</h2>
            <div className="details">
              <p>
                This is a language learning app to help get you on your way to learning Tagalog, one of the Philippines' national languages.
              </p>
              <p>
                We use spaced repetition training, a technique to help you better master and retain new information.

                You will be shown a Tagalog word. See if you can enter the corresponding English translation of the word.
              </p>
            </div>
            
            <div>
              <p>Just want to check out the app? Register using a demo user:</p>
              <ul className="demo">
                <li><strong>Username: </strong>one</li>
                <li><strong>Password: </strong> Password123</li>
              </ul>
            </div>

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
    
    </div>
  );
}

const mapStateToProps = state => ({
  learnMore: state.info.learnMore
});

export default connect(mapStateToProps)(Info);
