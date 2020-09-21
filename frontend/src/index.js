import Vue from 'vue';

import App from './components/App.vue';

// window.Vue = require('vue');

// if (process.env.MIX_ENV_MODE === 'production') {
//   Vue.config.devtools = false;
//   Vue.config.debug = false;
//   Vue.config.silent = true;
// }
  
const app = new Vue({
  el: '#app',
  // router,
  // store,
  // mode: 'production',
  ...App
});
  