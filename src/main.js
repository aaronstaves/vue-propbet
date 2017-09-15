// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import VueFire from 'vuefire';

import App from '@/App';
import router from '@/router';
import { fb } from '@/helpers/firebase';


Vue.use(VueFire);
Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    user: null,
  },
  created() {
    // setup login/auth observer
    fb.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (this.user) {
        if (this.$route.path === '/') {
          this.$router.push('/home');
        }
      } else {
        this.user = null;
        this.$router.push('/');
      }
    });

    // setup router guarded routes
    router.beforeEach((to, from, next) => {
      // doesn't require auth, or user is logged in
      if (this.user || !to.matched.some(record => record.meta.auth)) {
        return next();
      }

      // otherwise redirect to login
      return next({ name: 'Login' });
    });
  },
});
