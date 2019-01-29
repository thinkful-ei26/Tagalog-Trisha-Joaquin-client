import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../styles/card.css';
import AnswerFeedbackCorrect from './answer-feedback-correct';
import AnswerFeedbackIncorrect from './answer-feedback-incorrect';

export class Card extends Component {
// constructor(props){
//   this.state={
//     submit: false,
//     feedback: 'incorrect'
//   }
// }
// If submit is true && answer is correct, then return AnsFeedCorrect, else return AnsFeedIncorrect
// onSubmit(submit){
//   this.setState({submit})
// }

// onFeedback(feedback){
//   this.setState=({feedback:correct})
// }

  render() {
    const { answer, word } = this.props;
    return (
      <div className="card-wrapper">
        <fieldset>
          <div className="card-answer-response">
            <AnswerFeedbackCorrect />
            <AnswerFeedbackIncorrect />
          </div>
          <legend>Learn Tagalog</legend>
          <form className="card-question-form" action="submit">
            <div className="question">
              {' '}
              <h2>{word}</h2>
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
}
export default reduxForm({
  form: 'card'
})(Card);
