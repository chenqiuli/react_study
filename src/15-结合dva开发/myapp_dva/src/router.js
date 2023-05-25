import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Film from './routes/Film';
import Cinema from './routes/Cinema';
import Mine from './routes/Mine';
import Detail from './routes/Detail';
import Login from './routes/Login';

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={() =>
          <App>
            <Switch>
              <Route path="/film" component={Film} />
              <Route path="/cinema" component={Cinema} />
              <Route path="/detail/:myid" component={Detail} />
              <Route path="/mine" render={() => {
                return localStorage.getItem("token") ? <Mine /> : <Redirect to="/login" />;
              }} />
              <Redirect from="/" to="/film" />
            </Switch>
          </App>
        } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
