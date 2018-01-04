import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container';


const App = () => (
  <div>
    <Route path="" component={HeaderContainer}/>
    <Route path="" component={HomeContainer}/>
  </div>
);

export default App;

// <Switch>
//   <Route path="/login" component={SessionFormContainer} />
//   <Route path="/signup" component={SessionFormContainer} />
//
// </Switch>
