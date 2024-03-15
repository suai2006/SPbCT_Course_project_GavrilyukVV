import Vue from 'vue'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'semantic-ui-css/semantic.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Content from '@/components/Content.vue';
Vue.use(VueCookies,{ expires: "60s"});
Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
});
Vue.component('Content', Content);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
