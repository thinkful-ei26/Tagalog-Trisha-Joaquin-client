import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

//send answer to server
export const POST_ANSWER_REQUEST = 'POST_ANSWER_REQUEST';
export const postAnswerRequest = () => ({
  type: POST_ANSWER_REQUEST
});

export const POST_ANSWER_SUCCESS = 'POST_ANSWER_SUCCESS';
export const postAnswerSuccess = answer => ({
  type: POST_ANSWER_SUCCESS,
  answer
});

export const POST_ANSWER_ERROR = 'POST_QUESTION_ERROR';
export const postAnswerError = error => ({
  type: POST_ANSWER_ERROR,
  error
});

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/question`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  })
  .then( question => { 
    console.log('question',question);
    dispatch(fetchQuestionSuccess(question))
  })
  .catch( error => { dispatch(fetchQuestionError(error))
  });
}

export const postAnswer = (answer) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(postAnswerRequest());
  return fetch(`${API_BASE_URL}/question`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  })
  .then( answer => { 
    dispatch(postAnswerSuccess(answer))
  })
  .catch( error => { dispatch(postAnswerError(error))
  });
}
