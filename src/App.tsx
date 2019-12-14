import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LoginPage from "./LoginPage";
import GiftPage from "./GiftPage";
import 'bootstrap/dist/css/bootstrap.min.css';

// Все что ниже касается вопросов роутинга т.к. страниц у нас больше одной.

const routes = [
    {
        path: "/home",
        component: LoginPage
    },
    {
        path: "/gift",
        component: GiftPage
    },
  ];

export default function AuthExample() {
  return (
      <Router>
        <div>
          <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
  );
}

function RouteWithSubRoutes(route: any, extraProps = {}) {
  return (
      <Route
          exact={route.exact}
          path={route.path}
          render={props => route.render
              ? route.render(props)
              : <route.component {...props} {...extraProps} route={route}/>}
          strict={route.strict}/>
  );
}
