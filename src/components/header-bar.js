import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import '../styles/header-bar.css'

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        localStorage.clear();
    }

    render() {
        // Only render the logout button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button 
                    className="logout-btn"
                    onClick={() => this.logOut()}
                >   
                    Log out
                </button>
            );
        }
        return (
            // <div className="header-bar">
            //     <h1>Tagalog Teacher</h1>
            //     {logOutButton}
            // </div>
        //     <ul className="header-bar">
        //         <li className="header-center">
        //             <h1 className="logo-content">
        //                 Tagalog Teacher
        //             </h1>
        //         </li>
        //         <li className="header-right">
        //             {logOutButton}
        //         </li>
        //         <li className="ombre-bar"></li>
        //   </ul>
        <section>
            <div className="image">
            <h1>Tagalog Teacher</h1>
            </div>
            <div className="ombre-bar"></div>
            {logOutButton}
        </section>
        
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
