/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import '../sass/app.scss';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from '@/router/Router';

const App = (): React.ReactElement => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
