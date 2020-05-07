import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  FrameWork as FrameWorkView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Journal as JournalView,
  SignUp as SignUpView,
  ContactUs as ContactUsView,

} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={FrameWorkView}
        exact
        layout={MainLayout}
        path="/framework"
      />
      <RouteWithLayout
        component={JournalView}
        exact
        layout={MainLayout}
        path="/journal"
      />
      <RouteWithLayout
        component={ContactUsView}
        exact
        layout={MainLayout}
        path="/contact-us"
      />

    </Switch>
  );
};

export default Routes;
