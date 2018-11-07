import Vue from 'vue'
import Vuex,{Store} from 'vuex'
import modules from './modules'
Vue.use(Vuex);

const store = new Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules
})
window.store = store;
export default store;