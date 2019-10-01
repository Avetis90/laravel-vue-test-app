// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.axios = require('axios');

window.token = localStorage.getItem('token');
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['Authorization'] = "Bearer" + ' ' + window.token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

import Vue from 'vue'
import App from './App'
import router from './router'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  });
