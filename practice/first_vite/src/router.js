import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Button from './components/Button.vue';
import Lifecycle from './components/Lifecycle.vue';
import Databind from './components/Databind.vue';
import Event from './components/Event.vue';
import Computed from './components/Computed.vue';

const routes = [
  {
    path: '/hello_world',
    name: 'hello_world',
    component: HelloWorld,
  },
  {
    path: '/data_binding',
    name: 'data_binding',
    component: Databind,
  },
  {
    path: '/life_cycle',
    name: 'life_cycle',
    component: Lifecycle,
  },
  {
    path: '/button',
    name: 'my_button',
    component: Button,
  },
  {
    path: '/computed',
    name: 'computed',
    component: Computed,
  },
  {
    path: '/event',
    name: 'event',
    component: Event,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
