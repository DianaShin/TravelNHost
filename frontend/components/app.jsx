import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
// import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    // <Route path='/home' component={HomeContainer}/>
    <img src="http://res.cloudinary.com/ayoung0131/image/upload/v1514922236/siwa_landing_photo3_hnrbjf.jpg"/>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <h1> Meet locals. Travel the World. Be hospitable. </h1>
  </div>
);

export default App;
