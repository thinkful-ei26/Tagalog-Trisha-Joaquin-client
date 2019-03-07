import {
  LEARN_MORE_CLICK,
  BACK_CLICK
} from '../actions/landing-page';

const initialState = {
  learnMore: null,
  back: null
};

export default function reducer(state = initialState, action) {
  if (action.type ===  LEARN_MORE_CLICK) {
    return Object.assign({}, state, { 
      learnMore: true,
      back: false 
    });
  }
  if (action.type === BACK_CLICK) {
    return Object.assign({}, state, { 
      learnMore: false,
      back: true 
    });
  }
};