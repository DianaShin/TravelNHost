import { RECEIVE_DESTINATION } from '../actions/destination_actions';
import { RECEIVE_HOST } from '../actions/host_actions';
import merge from 'lodash/merge';

const hostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DESTINATION:
      return action.hosts || {};
    case RECEIVE_HOST:
      return merge({}, state, { [action.host.id]: action.host });
    default:
      return state;
  }
};

export default hostsReducer;
