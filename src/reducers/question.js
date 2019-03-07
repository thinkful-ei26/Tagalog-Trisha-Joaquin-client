import {
  UPDATE_CORRECT,
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  PUT_SUCCESS,
  PUT_REQUEST,
  PUT_ERROR
} from '../actions/question';

const initialState = {
  correct: null,
  question: { word: '' },
  error: null,
  loading: false,
  feedback: null,
  next: null
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_CORRECT) {
    return Object.assign({}, state, { correct: action.bool });
  }
  if (action.type === FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null,
      feedback: null,
      loading: false,
      correct: null,
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === PUT_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === PUT_SUCCESS) {
    return Object.assign({}, state, {
      error: null,
      feedback: null,
      loading: false
    });
  } else if (action.type === PUT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } 
  
  return state;
}
