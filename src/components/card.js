import React, { Component } from 'react';
import { connect, reset } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty } from '../validators';
import { putAnswer, updateCorrect } from '../actions/question';
import '../styles/card.css';

export class Card extends Component {

  //ideally, props should be converted to redux state, however Joaquin is more comfortable in react state hence below:
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      feedback: null,
      message: '',
      submit: false
    };
  }

  handleAnswer(event) {
    this.setState({
      answer: event.target.value
    });
  }

  onSubmit(value) {
    //validate answers on client side to render dynamic feedback & also send userinput to server side to validate the answer there too 
    // then dispatch updateCorrect(bool) && change the database based on the correct/incorrect answer on the server-side
    const { word } = this.props.question;
    let userinput = this.state.answer.toLowerCase();
    let answer = this.props.question.answer.toLowerCase();

    value.preventDefault();
    if (userinput === answer) {
      this.setState({
        feedback: 'correct',
        message: `You got it! "${word}" is "${userinput}".`,
        submit: true
      });
      this.props.dispatch(updateCorrect(true));
    } else if (userinput !== answer) {
      this.setState({
        feedback: 'incorrect',
        message: `"${userinput}" is incorrect. The answer is "${answer}"`,
        submit: true
      });
      this.props.dispatch(updateCorrect(false));
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, id, question, correct } = this.props;
    question.userinput = this.state.answer;
 
    const { counter } = this.props.question;
  
    /* ========= CORRECT FEEDBACK ========== */
    if (correct) {
      return (
        <div className="correct-response">
          <h3>{this.state.message}</h3>
          <button
            className="next-button"
            disabled={pristine || submitting}
            onClick={() => this.props.dispatch(putAnswer(id, question))}
          >
            Next
          </button>
        </div>
      );
    }
    /* ========= INCORRECT FEEDBACK ========== */
    if (correct === false) {
      return (
        <div className="incorrect-response">
          <h3>{this.state.message}</h3>
          <button
            className="next-button"
            disabled={pristine || submitting}
            onClick={() => this.props.dispatch(putAnswer(id, question))}
          >
            Next
          </button>
        </div>
      );
    }

    if(counter === 10) {
      return (
        <div className="session-complete">
          <p>Game Over :D</p>
          <img 
            src="https://media.giphy.com/media/xn9yw4QWUiC2Y/giphy.gif" 
            alt="game over gif" 
            className="cat"
          />

          {/* <button
            className="reset"
            onClick={() => {
              console.log('counter reset');
              } 
            }
          >
            Reset
          </button> */}

        </div>
      )
    }

    return (
      <div className="card-wrapper">
        <p>
          <strong>Progress: </strong>
          {`${counter}`}
        </p>
        <fieldset>
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

const mapStateToProps = state => ({
  correct: state.question.correct,
});

Card = connect(mapStateToProps)(Card);

export default reduxForm({
  form: 'card',
})(Card);
