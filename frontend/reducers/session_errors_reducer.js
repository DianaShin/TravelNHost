import {
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, clearErrors, receiveErrors, receiveCurrentUser
} from '../actions/session_actions';
import merge from 'lodash/merge';

 const sessionErrorsReducer = function (state = [], action)  {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ERRORS:
        return action.errors;
      case CLEAR_ERRORS:
        let newState = merge({}, state);
        newState.errors= [];
        return newState;
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return state;
  }
};

export default sessionErrorsReducer;
