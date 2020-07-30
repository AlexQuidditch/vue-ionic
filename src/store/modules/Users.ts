/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */

import { Module } from 'vuex/types';
import { RootState } from '@/types/store';
import { UsersProvider } from '@/providers';
import { User } from '@/types/entities';
import { ACTIONS, MUTATIONS } from '../types';

const module: Module<RootState['Users'], RootState> = {
  namespaced: true,

  state: {
    list: [],
  },

  getters: {},

  actions: {
    async [ACTIONS.Users.getList]({ commit }) {
      const result = await UsersProvider.list();
      console.log(result);
      commit(MUTATIONS.USERS.SET_USERS, result);
    },

    async [ACTIONS.Users.create]({ commit }, { form }: { form: FormData }) {
      console.log(form);

      const result = await UsersProvider.create(form);
      console.log(result);
      commit(MUTATIONS.USERS.ADD_USER, result);
    },
  },

  mutations: {
    [MUTATIONS.USERS.SET_USERS](state, payload: User[]) {
      state.list = payload;
    },

    [MUTATIONS.USERS.ADD_USER](state, user: User) {
      state.list.push(user);
    },
  },

  modules: {},
};

export default module;
