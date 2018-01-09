import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HeaderContainer from './header/header_container';
import Home from './home/home';
import DestinationShow from './destinations/destination_show_container';
import HostShowContainer from './hosts/host_show_container';


const App = () => (
  <div>
      <Route path="" component={HeaderContainer}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={Home}/>
      <Route exact path="/login" component={Home}/>
      <Switch>
        <Route path='/destinations/:destinationId/hosts/:hostId' component={HostShowContainer}/>
        <Route path='/destinations/:destinationId' component={DestinationShow}/>
      </Switch>
  </div>
);

export default App;
