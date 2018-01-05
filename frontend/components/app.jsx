import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HeaderContainer from './header/header_container';
import Home from './home/home';
import DestinationShow from './destinations/destination_show_container';


const App = () => (
  <div>
      <Route path="" component={HeaderContainer}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={Home}/>
      <Route exact path="/login" component={Home}/>
      <Route path='/destinations/:destinationId' component={DestinationShow}/>
  </div>
);

export default App;

// <Switch>
//   <Route path="/login" component={SessionFormContainer} />
//   <Route path="/signup" component={SessionFormContainer} />
//
// </Switch>
