import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import Card from './card';

export class Dashboard extends React.Component {


  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <h2>Hello {this.props.name}!</h2>
        </div>
        <Card />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { username, name } = state.auth.currentUser;
  return {
    username,
    name
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
