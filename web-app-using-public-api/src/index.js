import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UpcomingMoviesList from './components/UpcomingMoviesList';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
  <div>
    <Route exact path='/' component={App}/>
    <Route path="/upcoming" component={UpcomingMoviesList} />
  </div>
  </Router>) , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
