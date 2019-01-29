import React from 'react';
import './card.css';
// this will be my component to render a question and collect the user response.
// It needs to be stateful on the first implementation.
export default function Card(props)  {

 
    // let keys = Object.keys(this.state.questions);
    const questionBox = 'questionBox';
    const answerField = 'answerField';
    return (
      <div className="card-wrapper">
        <fieldset>
          <legend>Tagalog</legend>
          <form action="submit">
            <div className="question">What is Hanga Banga?</div>
            <label for="answer-submit" />
            <input type="text" name="answer-submit" value="Your answer here" />
            <div className="response" />
          </form>
        </fieldset>
      </div>
    );
  }

