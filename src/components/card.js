import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './card.css';
import AnswerFeedbackCorrect from './answer-feedback-correct';
import AnswerFeedbackIncorrect from './answer-feedback-incorrect';

export function Card(props) {
  console.log('Card props: ',props);
  return(
    <div className="card-wrapper">
      <fieldset>
        <div className="card-answer-response">
          <AnswerFeedbackCorrect />
          <AnswerFeedbackIncorrect/>
        </div>
        <legend>Learn Tagalog</legend>
        <form className="card-question-form" action="submit">
          <div className="question">
            {' '}
            <h2>Hanga Banga?</h2>
          </div>
          <Field
            component="input"
            className="card-input"
            type="text"
            name="answer-input"
            placeholder="Your answer here"
            autoFocus={true}
            required={true}
          />
          <div className="response" />
        </form>
        <button className="card-submit-button" type="submit">
          Check your answer
        </button>
      </fieldset>
    </div>
  );
}
export default reduxForm({
  form: 'card'
})(Card);
