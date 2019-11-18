import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistance from 'vuex-persist';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistance({
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {},
    mutations,
    actions,
    getters: {},
    plugins: [vuexLocal.plugin],
    strict: debug
});
