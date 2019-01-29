import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        console.log('dashboard props', this.props);
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                    <h1>Welcome!</h1>
                </div>
                {/* <div className="dashboard-name">Name: {`${this.props.firstname} ${this.props.lastname}`}</div> */}
                <div className="dashboard-name">Name: {`${this.props.name}`}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { username, name } = state.auth.currentUser;
    return {
        username,
        name,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
