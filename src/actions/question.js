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
    console.log('action question:',question);
    dispatch(fetchQuestionSuccess(question))
  })
  .catch( error => { dispatch(fetchQuestionError(error))
  });
}

//send answer to server
export const PUT_REQUEST = 'PUT_REQUEST';
export const putRequest = () => ({
  type: PUT_REQUEST
});

export const PUT_SUCCESS = 'PUT_SUCCESS';
export const putSuccess = question => ({
  type: PUT_SUCCESS,
  question
});

export const PUT_ERROR = 'PUT_ERROR';
export const putError = error => ({
  type: PUT_ERROR,
  error
});

// export const NEXT_QUESTION = 'NEXT_QUESTION';
// export const nextQuestion = question => ({
//   type: NEXT_QUESTION,
//   question
// });

let nextquestion;

export const fetchNextQuestion = (id, answer) => (dispatch, getState) => {
  console.log('sending changes to previous question', JSON.stringify(answer))
  const authToken = getState().auth.authToken;
  dispatch(putRequest());
  return fetch(`${API_BASE_URL}/question/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({answer: answer})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    //console.log('from server: ',res)
    return res.json()
  })
  .then( question => { 
    dispatch(fetchQuestionSuccess(question));
    console.log('next question rendered: ',question);
    return question;
  })
  .then(question => {
    // console.log('inside nextquestion: ', question);
    // dispatch(nextQuestion(question))
    nextquestion = question;
    return nextquestion;
  })
  .catch( error => { dispatch(putError(error))
  });
}

console.log(nextquestion);