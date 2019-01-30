import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../styles/card.css';
import { API_BASE_URL } from '../config';
import { required, nonEmpty } from '../validators';
import { postAnswer } from '../actions/question';

export class Card extends Component {
  onSubmit(value) {
    console.log('value of card input',value);
    this.props.dispatch(postAnswer(value.userinput));
  }

/*
  1. check if it's not an empty field
  2. if there is value, validate userInput, see if its the correct answer
  3. feedback => correct
  4. change the M value (change the order of the questions next)
*/

  render() {
    //console.log('cards props: ', this.props)
    const { word, handleSubmit, pristine, submitting, } = this.props;
    return (
      <div className="card-wrapper">
        <fieldset>
          <div className="card-answer-response">
          </div>
          <legend>Learn Tagalog</legend>
          <form 
            id="card-question-form"
            className="card-question-form" 
            onSubmit={ handleSubmit((values) => this.onSubmit(values))}
          >
            <div className="question">
              <h2>{word}</h2>
            </div>

            <Field
              //onChange={this.handleAnswer.bind(this)}
              //value={this.state.answer}
              component="input"
              className="card-input"
              type="text"
              name="userinput"
              placeholder="Your answer here"
              autoFocus={true}
              required={true}
              ref={input => this.input = input}
              validate={[required, nonEmpty]}
            />
            <div className="response" />
            <button 
            className="card-submit-button" 
            type="submit"
            disabled={pristine || submitting}
            // onSubmit={console.log('clicked')}
          >
            Check your answer
          </button>
          </form>
        </fieldset>
      </div>
    );
  }
}
export default reduxForm({
  form: 'card',
  //onSubmitFail: (errors, dispatch) => dispatch(focus('card')),
})(Card);
