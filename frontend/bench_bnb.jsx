import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import { signup, login, logout } from './util/session_api_util';
//
// window.signup = signup;
// window.login = login;
// window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome boy!</h1>, root);
});
