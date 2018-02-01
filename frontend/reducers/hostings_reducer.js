import { RECEIVE_HOSTINGS, RECEIVE_HOSTING, REMOVE_HOSTING } from '../actions/hosting_actions';
import merge from 'lodash/merge';

const hostingsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOSTINGS:

     return action.hostings || {};
    case RECEIVE_HOSTING:
    // debugger
     return merge({}, state, { [action.hosting.id]: action.hosting });
    case REMOVE_HOSTING:
      let newState = merge({}, state);
      delete newState[action.hosting.id];
      return newState;
    default:
      return state;
  }
};

export default hostingsReducer;
