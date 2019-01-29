import React from 'react';
import './card.css';
// this will be my component to render a question and collect the user response.
// It needs to be stateful on the first implementation.
export default function Card(props)  {

 
  
    return (
      <div className="card-wrapper">
        <fieldset>
          <legend>Learn Tagalog</legend>
          <form className='card-question-form' action="submit">
            <div className="question"> <h2>Hanga Banga?</h2></div>
            {/* <label for="answer-input" /> */}
            <input className='card-input' type="text" name="answer-input" placeholder='Your answer here' autofocus='true' required='true'/>
            <div className="response" />
          </form>
          <button className='card-submit-button' type='submit'>Check your answer</button>
        </fieldset>
      </div>
    );
  }

