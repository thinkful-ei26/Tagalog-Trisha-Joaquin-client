import {
  UPDATE_CORRECT,
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  NEXT_QUESTION,
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
  // console.log('state on question reducer', state);
  // console.log('action on question reducer', action);
  if (action.type === FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null,
      feedback: null,
      loading: false,
      correct: null
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === PUT_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === PUT_SUCCESS) {
    console.log('reducer question state: ', state);
    console.log('reducer question action: ', action);
    // console.log('reducer question action: ',action)
    return Object.assign({}, state, {
      // answer: action.answer,
      error: null,
      feedback: null,
      loading: false
    });
  } else if (action.type === PUT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
    // } else if (action.type === NEXT_QUESTION){
    //   console.log('action next: ', action);
    //   console.log('state next: ', state);
    //   return Object.assign({}, state, {
    //     question: action.question
    //   })
  }
  return state;
}
