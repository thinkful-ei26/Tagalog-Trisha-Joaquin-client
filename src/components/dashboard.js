import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/question';
import requiresLogin from './requires-login';
import Card from './card';

export class Dashboard extends Component {

    componentDidMount(){
        this.props.dispatch(fetchQuestion())
    }
    render() {
        //console.log('dashboard props', this.props);
        console.log('dashboard props', this.props.question.word);
        const word = this.props.question.word;
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2>Hello {this.props.name}!</h2>
                    <p>@{this.props.username}</p>
                </div>
                {/* <AnswerFeedbackCorrect />
                <AnswerFeedbackIncorrect /> */}
                <Card 
                    // answer={this.props.questionData[0].question.answer}
                    word={word}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
console.log('dashboard state: ',state)
//console.log('dashboard state: ',state.auth.currentUser.questionData)
    const { username, name } = state.auth.currentUser;
    return {
        username,
        name,
        question: state.question.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
