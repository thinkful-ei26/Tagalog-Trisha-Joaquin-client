import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty } from '../validators';
import { fetchNextQuestion } from '../actions/question';
import '../styles/card.css';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      feedback: null,
      message: '',
      submit: false,
      correct: null
    };
  }
  
  handleAnswer(event) {
    this.setState({
      answer: event.target.value
    });
  }

  onSubmit(value) {
    const { word, id } = this.props.question;
    let userinput = this.state.answer.toLowerCase();
    let answer = this.props.question.answer.toLowerCase();
    const input = { word, id };

    value.preventDefault();
    if (userinput === answer) {
      this.setState({
        feedback: 'correct',
        message: `You got it! "${word}" is "${userinput}".`,
        submit: true,
        correct: true, 
      });
      console.log('correct input: ',this.state);
    } else if (userinput !== answer) {
      this.setState({
        feedback: 'incorrect',
        message: `"${userinput}" is incorrect. The answer is "${answer}"`,
        submit: true,
        correct: false
      });
      console.log('incorrect input: ',input);
    }
  }

  render() {
    //console.log('card state', this.state)
    console.log('card props', this.props)
    const { handleSubmit, pristine, submitting, id, question } = this.props;
    const { correct } = this.state;
  
    /* ========= CORRECT FEEDBACK ========== */
    if(correct){
      return(
        <div className="correct-feedback">
          <h3>{this.state.message}</h3>
          <button 
            className='next-button' 
            disabled={pristine || submitting}
            onClick={ () => this.props.dispatch(fetchNextQuestion(id, question)) }
          >
            Next
          </button>
        </div>
      )
    }
  /* ========= INCORRECT FEEDBACK ========== */
    if(correct === false){
      return(
        <div className="correct-feedback">
          <h3>{this.state.message}</h3>
          <button 
            className='next-button' 
            disabled={pristine || submitting}
            onClick={ () => this.props.dispatch(fetchNextQuestion(id, question)) }
          >
          Next
          </button>
        </div>
      )
    }
    
    return (
      <div className="card-wrapper">
      <p><strong>Progress: </strong>{`${this.props.question.head}/10`}</p>
        <fieldset>
          <div className="card-answer-response">{this.state.message}</div>
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
            {/* ========= ANSWER SUBMIT BUTTON ==========  */}
            <button
              onClick={this.onSubmit.bind(this)}
              className="card-submit-button"
              type="submit"
              disabled={pristine || submitting}
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
