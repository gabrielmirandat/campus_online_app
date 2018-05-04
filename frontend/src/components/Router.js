import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './Home';
import NewsAdd from './NewsAdd';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/addnews' component={NewsAdd}/>
    </Switch>
  </main>
)

export default Router;

// NewsDetails
// NewsAdd