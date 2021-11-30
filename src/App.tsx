import 'App.css';
import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './routerHistory';

const Home = lazy(() => import('./views/home'));
const Menu = lazy(() => import('./views/menu'));

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<></>}>
        <Switch>
          {/* Without use menu here */}
          <Menu>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route component={Home} />
            </Switch>
          </Menu>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
