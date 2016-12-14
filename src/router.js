import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import CounterApp from './components/CounterApp'
import TodoList from './components/TodoList'
import Chart from './components/Chart'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Chart} />
    </Router>
  );
};
