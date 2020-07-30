import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';

import { RouteConfig } from 'vue-router/types';

import Home from '../views/Home.vue';

Vue.use(IonicVueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import(/* webpackChunkName: "schedule" */ '../views/List.vue'),
      },
      {
        path: 'profile/:id',
        name: 'Profile',
        props: true,
        component: () => import(/* webpackChunkName: "maps" */ '../views/Profile.vue'),
      },
      {
        path: 'create',
        name: 'Create',
        component: () => import(/* webpackChunkName: "speakers" */ '../views/Create.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
];

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export function useRouter() {
  return router;
}

export default router;
