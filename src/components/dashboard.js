import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Card from './card';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        //console.log('dashboard props', this.props.questionData);
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
                    Username: {this.props.username}
                    <h2>Hello {this.props.name}!</h2>
                </div>
                <div className="dashboard-name">Name: {`${this.props.name}`}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <Card />
                <ul>
                    <li>
                        <span>{this.props.questionData[0].question.word}</span>
                    </li>
                </ul>
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
