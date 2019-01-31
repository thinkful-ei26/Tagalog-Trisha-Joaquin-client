import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../styles/card.css';
import { required, nonEmpty } from '../validators';
//import { postAnswer } from '../actions/question';
//import NextButton from './next-button';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      feedback: null,
      message: '',
      submit: false
    };
    this.handleNext = this.handleNext.bind(this);
  }
  handleAnswer(event) {
    this.setState({
      answer: event.target.value
    });
    //console.log(this.state.answer);
  }

  onSubmit(value) {
    const { answer, word, id } = this.props.question;
    const { userinput } = value;
    console.log('value',value);
    const input = { word, id, userinput, answer };

    value.preventDefault();
    if (this.state.answer === answer) {
      this.setState({
        feedback: 'correct',
        message: 'You got it!',
        submit: true
      });
      console.log('correct input: ',input);
    } else if (this.state.answer !== answer) {
      this.setState({
        feedback: 'incorrect',
        message: `Incorrect. The answer is "${answer}"`,
        submit: true
      });
      console.log('incorrect input: ',input);
    }
  }

  handleNext() {
    // this.setState(state =>({

    // }))
  
  }

  render() {
    const { handleSubmit, pristine, submitting, } = this.props;
    //console.log('question.word', this.props.question.word);
    console.log('answer', this.props.answer);
    // console.log('button buging', this.state.submit);

    return (
      <div className="card-wrapper">
        <fieldset>
          <div className="card-answer-response">{this.state.message}</div>
          <button className='next-button' disabled={false}>
            Next
          </button>
          <legend>Learn Tagalog</legend>
          <form
            id="card-question-form"
            className="card-question-form"
            onSubmit={handleSubmit(values => this.onSubmit(values))}
          >
            <div className="question">
              <h2>{this.props.question.word}</h2>
            </div>

            <Field
              onChange={this.handleAnswer.bind(this)}
              value={this.state.answer}
              component="input"
              className="card-input"
              type="text"
              name="userinput"
              placeholder="Your answer here"
              autoFocus={true}
              required={true}
              ref={input => (this.input = input)}
              validate={[required, nonEmpty]}
            />
            <div className="response" />
            <button
              onClick={this.onSubmit.bind(this)}
              className="card-submit-button"
              type="submit"
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
  form: 'card'
})(Card);
