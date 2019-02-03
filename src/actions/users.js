import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

//make a POST req on api/users, pass in the user info as req.body
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            normalizeResponseErrors(res)
        }) //call utility method in src/actions/utils.js to normalize the response error
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                //will handle errors such as a user registered with the same username
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};