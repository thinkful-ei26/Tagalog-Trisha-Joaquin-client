import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const UPDATE_CORRECT = 'UPDATE_CORRECT';
export const updateCorrect = bool => ({
  type: UPDATE_CORRECT,
  bool
});

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
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(question => {
      //console.log('on mount:', question);
      return dispatch(fetchQuestionSuccess(question));
    })
    .catch(error => {
      dispatch(fetchQuestionError(error));
    });
};

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

export const putAnswer = (id, answer) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(putRequest());
  return fetch(`${API_BASE_URL}/question/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ answer: answer })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return dispatch(fetchQuestion());
    })
    .catch(error => {
      console.log(error);
      dispatch(putError(error));
    });
};

// export const PROGRESS = 'PROGRESS';
// export const progress = (counter) => ({
//   type: PROGRESS,
//   counter
// });