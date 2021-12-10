// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {
  store
} from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/style.scss'
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-pagination/dist/tui-pagination.css'
import TuiGrid from 'tui-grid';

Vue.config.productionTip = false
Vue.prototype.$http = axios

TuiGrid.applyTheme('striped');
TuiGrid.setLanguage('ko');
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
