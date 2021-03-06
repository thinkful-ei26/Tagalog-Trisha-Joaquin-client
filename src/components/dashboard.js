import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/question';
import requiresLogin from './requires-login';
import Card from './card';
import HeaderBar from './header-bar';

export class Dashboard extends Component {

    componentDidMount(){
        this.props.dispatch(fetchQuestion())
    }

    render() {
        const { id } = this.props;
        const question = this.props.question;
        return (
            <div className="dashboard">
                <HeaderBar />
                <div className="dashboard-username">
                    <h2>Hello {this.props.username}!</h2>
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
