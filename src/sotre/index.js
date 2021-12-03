// import { createStore } from 'vuex'
import { createStore } from './gvuex';

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
  },
});
export default store;
