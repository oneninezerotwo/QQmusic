import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import Thome from './routes/Thome/Thome';
import Tranking from './routes/Tranking/Tranking';
import Tsearch from './routes/Tsearch/Tsearch';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Thome} />
        <Route path="/Tranking" exact component={Tranking} />
        <Route path="/Tsearch" exact component={Tsearch} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
