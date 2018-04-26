import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './Home';
import NewsDetails from './NewsDetails';
import NewsAdd from './NewsAdd';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/details' render={props => <NewsDetails {...props} />}/>
      <Route path='/addnews' component={NewsAdd}/>
    </Switch>
  </main>
)

export default Router;

// NewsDetails
// NewsAdd