import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

import Thome from './routes/Thome/Thome';
import Tranking from './routes/Tranking/Tranking';
import Tsearch from './routes/Tsearch/Tsearch';
import TMusicdetailss from './routes/TMusicdetailss/TMusicdetailss';
import Tbillboard from './routes/Tbillboard/Tbillboard';
import {Provider} from 'react-redux'
import store from './store/store'
// import { from } from '_array-flatten@2.1.2@array-flatten';
function RouterConfig({ history }) {
  return (
    <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Thome} />
        <Route path="/Tranking" exact component={Tranking} />
        <Route path="/Tsearch" exact component={Tsearch} />
        <Route path="/Tbillboard:id" exact component={Tbillboard} />
        <Route path="/TMusicdetailss" exact component={TMusicdetailss} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default RouterConfig;
