import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container';
import DestinationShow from './destinations/destination_show';


const App = () => (
  <div>
      <Route path="" component={HeaderContainer}/>
      <Route exact path="/" component={HomeContainer}/>
      <Route path='/destinations/:destination' component={DestinationShow}/>
  </div>
);

export default App;

// <Switch>
//   <Route path="/login" component={SessionFormContainer} />
//   <Route path="/signup" component={SessionFormContainer} />
//
// </Switch>
