import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../styles/card.css';
//import { API_BASE_URL } from '../config';
import { required, nonEmpty } from '../validators';
import { postAnswer } from '../actions/question';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      feedback: null,
      message: ''
    };
  }
  handleAnswer(event) {
    this.setState({
      answer: event.target.value
    });
    console.log(this.state.answer);
  }
  onSubmit(value) {
    const { answer, word, id } = this.props.question;
    const { userinput } = value;
    const _answer = answer.toLowerCase();

    value.preventDefault();
    if (this.state.answer === this.props.question.answer) {
      this.setState({ feedback: 'correct', message: 'You got it!' });
    } else if (this.state.answer !== this.props.question.answer) {
      this.setState({
        feedback: 'incorrect',
        message: `Incorrect. The answer is "${this.props.question.answer}"`
      });
    }

    // const _userinput = userinput.toLowerCase();

    // if (_userinput === _answer) {
    //   const correctInput = { word, id, userinput, answer };
    //   console.log(
    //     `You answered correctly! The word was ${word} and it means ${userinput}`,
    //     correctInput
    //   );
    //this.props.dispatch(postAnswer(correctInput));
    // } else {
    //   console.log(
    //     `${userinput} is incorrect. The word was ${word} and it means ${answer}`
    //   );
    // }
  }

  /*
  1. check if it's not an empty field
  2. if there is value, validate userInput, see if its the correct answer
  3. feedback => correct
  4. change the M value (change the order of the questions next)
*/

  render() {
    //console.log('cards props: ', this.props)
    const { handleSubmit, pristine, submitting, word, answer } = this.props;
    console.log('question.word',this.props.question.word)
    console.log('answer',this.props.answer)

    return (
      <div className="card-wrapper">
        <fieldset>
          <div className="card-answer-response" >{this.state.message}</div>
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
              name="name" //*******userInput */
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
            {/* <button
              className="card-submit-button"
              type="submit"
              disabled={pristine || submitting}
              // onSubmit={console.log('clicked')}
            >
              Check your answer
            </button> */}
          </form>
        </fieldset>
      </div>
    );
  }
}
export default reduxForm({
  form: 'card'
  //onSubmitFail: (errors, dispatch) => dispatch(focus('card')),
})(Card);
