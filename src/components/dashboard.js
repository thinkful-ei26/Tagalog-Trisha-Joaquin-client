import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Card from './card';

export class Dashboard extends Component {

    render() {
        console.log('dashboard props', this.props.questionData);

        // console.log('dashboard props', this.props.questionData[0].question.word);

        // const { questionData } = this.props;

        // const question = questionData.forEach( (item, index) => {
        //     console.log('item: ' + item.question.word + ' index: ' + index)
        //     return (
        //         <li>
        //             <p>{item.question.word}</p>
        //             <p>{item.question.answer}</p>
        //         </li>
        //     )    
        // })

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2>Hello {this.props.name}!</h2>
                    <p>@{this.props.username}</p>
                </div>
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
