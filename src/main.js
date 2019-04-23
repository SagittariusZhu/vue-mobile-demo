import Vue from 'vue';
import App from './App';
import { router } from './router';

// require('./mock.js')

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
