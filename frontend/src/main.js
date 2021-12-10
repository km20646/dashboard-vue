// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  store
} from './store/store'
import './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-pagination/dist/tui-pagination.css'
import TuiGrid from 'tui-grid';

TuiGrid.applyTheme('striped');
TuiGrid.setLanguage('ko');
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
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
