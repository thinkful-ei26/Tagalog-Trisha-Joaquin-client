import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/question';
import requiresLogin from './requires-login';
import Card from './card';
import AnswerFeedbackCorrect from './answer-feedback-correct';
import AnswerFeedbackIncorrect from './answer-feedback-incorrect';

export class Dashboard extends Component {

    componentDidMount(){
        this.props.dispatch(fetchQuestion())
        console.log('questions fetched')
    }
    render() {
        console.log('dashboard props', this.props);

        // console.log('dashboard props', this.props.questionData[0].question.word);   

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2>Hello {this.props.name}!</h2>
                    <p>@{this.props.username}</p>
                </div>
                <AnswerFeedbackCorrect />
                <AnswerFeedbackIncorrect />
                <Card 
                    answer={this.props.questionData[0].question.answer}
                    word={this.props.questionData[0].question.word}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
//console.log('dashboard state: ',state)
//console.log('dashboard state: ',state.auth.currentUser.questionData)
    const { username, name, questionData } = state.auth.currentUser;
    return {
        username,
        name,
        questionData
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
