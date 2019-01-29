import React from 'react';
// this will be my component to render a question and collect the user response.
// It needs to be stateful on the first implementation.
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { question1: 'answer1' },
        { question2: 'answer2' },
        { question3: 'answer3' }
      ]
    };
  }

  render() {
    // let keys = Object.keys(this.state.questions);
    const questionBox = 'questionBox';
    const answerField = 'answerField';
    return (
      <div className="card-wrapper">
        <fieldset>
          <legend>Tagalog</legend>
          <form action="submit">
            <label for="answer-submit" />
            <input type="text" name="answer-submit" />
            <div className="response" />
          </form>
        </fieldset>
      </div>
    );
  }
}
