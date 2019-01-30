import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_REQUEST,
  POST_QUESTION_ERROR,
} from '../actions/question';

const initialState = {
  question: {text: ''},
  error: null,
  loading: false,
  feedback: null,
  correctAnswer: 0, 
  incorrectAnswer: 0
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null,
      feedback: null,
      prevousAnswer: null,
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === POST_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === POST_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      feedback: action.feedback
    });
  } else if (action.type === POST_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === POST_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === POST_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      feedback: action.feedback
    });
  } else if (action.type === POST_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } 
  return state;
}
