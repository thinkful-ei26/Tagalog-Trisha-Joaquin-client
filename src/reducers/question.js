import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_REQUEST,
  POST_ANSWER_ERROR,
} from '../actions/question';

const initialState = {
  question: {word: ''},
  error: null,
  loading: false,
  feedback: null,
};

export default function reducer(state = initialState, action) {
  // console.log('state on question reducer', state);
  // console.log('action on question reducer', action);
  if (action.type === FETCH_QUESTION_REQUEST){
    return Object.assign({}, state, { loading: true })
  }
  else if (action.type === FETCH_QUESTION_SUCCESS) {
    //console.log('state question reducer',state)
    return Object.assign({}, state, {
      question: action.question,
      error: null,
      feedback: null,
    });
  } else if (action.type === POST_ANSWER_REQUEST) {
    return Object.assign({}, state, { loading: true })
  } else if (action.type === POST_ANSWER_SUCCESS) {
    return Object.assign({}, state, {
      answer: action.answer,
      error: null,
      feedback: null,
    });
  } else if (action.type === POST_ANSWER_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } 
  return state;
}
