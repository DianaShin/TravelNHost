import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';
import hostsReducer from './hosts_reducer';

const entitiesReducer = combineReducers({
  destinations: destinationsReducer,
  hosts: hostsReducer
});

export default entitiesReducer;
