import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomeScreen from './containers/home';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
