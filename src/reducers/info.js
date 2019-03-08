import {
  LEARN_MORE_CLICK,
  BACK_CLICK
} from '../actions/info';

const initialState = {
  learnMore: null,
  back: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LEARN_MORE_CLICK :
    return Object.assign({}, state, { 
      learnMore: true,
      back: false 
    });

    case BACK_CLICK :
    return Object.assign({}, state, { 
      learnMore: false,
      back: true 
    });
    default : return state;
  }
};