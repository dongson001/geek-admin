import { createStore } from 'vuex';
// import { createStore } from './gvuex';
import { login } from '../api/user';

const store = createStore({
  state() {
    return {
      count: 666,
    };
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add');
      }, 1000);
    },
    login({ commit }, payload) {
      return login(payload);
    },
  },
});
export default store;
