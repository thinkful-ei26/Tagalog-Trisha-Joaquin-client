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
        const { id } = this.props;
        const question = this.props.question;
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    <h2>Hello {this.props.name}!</h2>
                    <p>@{this.props.username}</p>
                </div>
                <Card
                    question={question}
                    id={id}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { username, name, id } = state.auth.currentUser;
    return {
        username,
        name,
        question: state.question.question, 
        id,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
