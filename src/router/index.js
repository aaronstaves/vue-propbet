import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Contests from '@/components/Contests';
import ContestCreateForm from '@/components/Contest/CreateForm';
import Home from '@/components/Home';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        auth: false,
      },
    },
    {
      path: '/contests',
      name: 'Contests',
      component: Contests,
      meta: {
        auth: true,
      },
    },
    {
      path: '/contest/create',
      name: 'ContestCreate',
      component: ContestCreateForm,
      meta: {
        auth: true,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        auth: true,
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        auth: true,
      },
    },
    // catch all redirect
    {
      path: '*',
      redirect: '/',
    },
  ],
});
