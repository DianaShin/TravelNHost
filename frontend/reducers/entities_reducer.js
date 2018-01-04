import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';

const entitiesReducer = combineReducers({
  destinations: destinationsReducer
});

export default entitiesReducer;
