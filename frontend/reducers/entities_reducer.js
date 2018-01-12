import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';
import hostsReducer from './hosts_reducer';
import hostingsReducer from './hostings_reducer';
import guestsReducer from './guests_reducer';

const entitiesReducer = combineReducers({
  destinations: destinationsReducer,
  hosts: hostsReducer,
  hostings: hostingsReducer,
  guests: guestsReducer
});

export default entitiesReducer;
