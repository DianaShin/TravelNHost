import { RECEIVE_DESTINATION } from '../actions/destination_actions';
import { RECEIVE_HOST } from '../actions/host_actions';
import { RECEIVE_HOSTING, RECEIVE_HOSTINGS } from '../actions/hosting_actions';
import merge from 'lodash/merge';

const hostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DESTINATION:
      return action.hosts || {};
    case RECEIVE_HOST:
      return merge({}, state, { [action.host.id]: action.host });
    case RECEIVE_HOSTINGS:
      return Object.assign({}, state, action.hosts, action.guests);
    case RECEIVE_HOSTING:
      let newState = merge({}, state);
      newState[action.hosting.host_id].hosting_ids.push(action.hosting.id);
      return newState;
    default:
      return state;
  }
};

export default hostsReducer;
