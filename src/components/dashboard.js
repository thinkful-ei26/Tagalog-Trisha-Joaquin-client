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
        //console.log('dashboard props', this.props);
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
            </div>
        );
    }
}

const mapStateToProps = state => {
//    console.log('dashboard state: ',state)
console.log('dashboard state: ',state.auth.currentUser.questionData[0])
    const { username, name } = state.auth.currentUser;
    return {
        username,
        name,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
