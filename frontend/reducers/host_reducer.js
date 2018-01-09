import { RECEIVE_HOST } from '../actions/host_actions';
import merge from 'lodash/merge';

const hostReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOST:
     return action.host || {};
    default:
      return state;
  }
};

export default hostReducer;
