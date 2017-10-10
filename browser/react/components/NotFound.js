import React from 'react';
import {Link, Route} from 'react-router-dom';
import Main from './Main';

export default function NotFound() {
  return (
    <div>Oops! That page doesn't exist. Try <Link to='/'>starting here</Link> :) <Route path='/albums' component={Main} /> </div>
  )
}
