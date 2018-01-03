import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container';
// import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <Route path= '' component={HeaderContainer} />
    <Route path='' component={HomeContainer}/>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
