import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './card.css';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      feedback: null,
      message:''
    };
  }

  handleAnswer(event) {
    this.setState({
      answer: event.target.value
    });
    console.log(this.state.answer);
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.answer === this.props.answer) {
      this.setState({ feedback: 'correct', message:'You got it!' });
    }else if(this.state.answer !== this.props.answer){
      this.setState({feedback:'incorrect', message:'Nope'})
    }
  }


  render() {
    const { answer, word } = this.props;
    
    return (
      <div className="card-wrapper">
        <fieldset>
          <div className="card-answer-response">{this.state.message}</div>
          <legend>Learn Tagalog</legend>
          <form
            className="card-question-form"
            action="submit"
          >
            <div className="question">
              <h2>{word}</h2>
            </div>

            <Field
              onChange={this.handleAnswer.bind(this)}
              value={this.state.answer}
              component="input"
              className="card-input"
              type="text"
              name="answer"
              placeholder="Your answer here"
              autoFocus={true}
              required={true}
            />
            <div className="response" />
          </form>
          <button
            onClick={this.onSubmit.bind(this)}
            className="card-submit-button"
            type="submit"
          >
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
