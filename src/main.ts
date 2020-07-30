import Vue from 'vue';
import Ionic from '@ionic/vue';
import CompositionApi, { provide } from '@vue/composition-api';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './assets/ionic-variables.css';

import App from './App.vue';

import './registerServiceWorker';

import router from './router';
import store from './store';

import { EnvironmentService } from './services';

Vue.use(Ionic);
Vue.use(CompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  setup() {
    provide('$filesRoot', EnvironmentService.getFromEnvByKey('FILES_ROOT'));
  },
}).$mount('#app');
