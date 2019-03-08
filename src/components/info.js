import React from 'react';
import { backClick } from '../actions/info';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/info.css';

export function InfoModal(props) {  
  return (
    <div className="info-overlay" id="modal"> 
      <div 
        className="info-content"
        aria-live="polite"
      >       
        <h3>How to use this app</h3> 
        <p>
          <strong>What's Cooking</strong> is a full-stack app that can help you narrow down your choices. On page load, a user can: 
        </p>
        <ul className="info-text-list">
          <li>Browse through the recipe list for meal ideas and click on a recipe for instructions to make the dish.</li>
          <li>Not sure what to cook? Click the "Surprise Me" button to generate a random recipe.</li>
          <li>Add a new recipe to the "What's Cooking?" app by clicking on the "+ Add Recipe" button</li>
        </ul>
        <p>A user does not need to login in order to use my app.</p>          
          <button 
          className="got-it-btn"
          onClick={ () => props.dispatch(backClick()) }
          >
            <Link to="/">Back to Recipes</Link>
          </button>
          <a
              className="github-repo" href="https://github.com/thinkful-ei26/trisha-wc-client"
          >
            GitHub Repo
          </a>
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  info: state.navReducer.info
});

export default connect(mapStateToProps)(InfoModal);