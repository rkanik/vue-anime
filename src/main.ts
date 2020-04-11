import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components';

// Disabling production tips
Vue.config.productionTip = false;

// Defining global components
components.define(Vue);

// Initalizing vue app
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
