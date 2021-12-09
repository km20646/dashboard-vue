import Vue from 'vue'
import Vuex from 'vuex'
import dashboardApp from './modules/dashboardApp'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    dashboardApp: dashboardApp
  }
})
