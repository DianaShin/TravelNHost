import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import {login, logout, signup } from './actions/session_actions';
import {fetchDestination, fetchDestinations } from './actions/destination_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  //testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchDestination = fetchDestinations;
  window.fetchDestinations = fetchDestination;


  if (window.currentUser){
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
