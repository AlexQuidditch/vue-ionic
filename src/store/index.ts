import Vue from 'vue';
import Vuex from 'vuex';

import { EnvironmentService } from '@/services';

import modules from './modules';
import plugins from './plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  plugins,
  strict: EnvironmentService.isDevelopment,
});

export function useStore() {
  return store;
}

export default store;
