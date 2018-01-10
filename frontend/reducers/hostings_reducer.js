import { RECEIVE_HOSTINGS, RECEIVE_HOSTING  } from '../actions/hosting_actions';
import merge from 'lodash/merge';

const hostingsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOSTINGS:

     return action.hostings || {};
    case RECEIVE_HOSTING:
     return merge({}, state, { [action.hosting.id]: action.hosting });
    default:
      return state;
  }
};

export default hostingsReducer;
