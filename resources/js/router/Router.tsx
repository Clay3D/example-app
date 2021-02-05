import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routerPath } from '@/router/common';
import Navbar from '@/components/Navbar/Navbar';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';
import PageNotFound from '@/components/PageNotFound/PageNotFound';
import About from "@/pages/about/About";

const Router = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path={routerPath.HOME}>
        <Navbar />
        <Home />
      </Route>
      <Route path={routerPath.LOGIN}>
        <Login />
      </Route>
      <Route path={routerPath.REGISTER}>
        <Register />
      </Route>
      <Route path={routerPath.ABOUT}>
        <Navbar />
        <About />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Router;
