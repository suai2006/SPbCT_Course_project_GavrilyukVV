import Vue from 'vue'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'semantic-ui-css/semantic.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Content from '@/components/Content.vue';
import ErrorMessage from '@/components/semantic/ErrorMessage.vue';
import SuiVue from 'semantic-ui-vue';
Vue.use(VueCookies,{ expires: 2147483647 });
Vue.use(SuiVue);
Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
});

Vue.component('Content', Content);
Vue.component('ErrorMessage', ErrorMessage);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
