import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Contests from '@/components/Contests';
import Home from '@/components/Home';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/contests',
      name: 'Contests',
      component: Contests,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    // catch all redirect
    {
      path: '*',
      redirect: '/',
    },
  ],
});
