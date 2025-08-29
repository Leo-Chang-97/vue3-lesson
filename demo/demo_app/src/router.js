import { createRouter, createWebHistory } from 'vue-router';
import Pinia from './components/Pinia.vue';
import Practice from './components/Practice.vue';
import Child from './components/Child.vue';
import Getdata from './components/Getdata.vue';
import Axios from './components/Axios.vue';
// 定義路由
const routes = [
  { path: '/', name: 'pinia', component: Pinia  },
  { path: '/practice', name: 'practice', component: Practice  },
  { path: '/data_send', name: 'child', component: Child, 
    props: (route) => ({
        name1: route.query.user_name,
        age: route.query.age,
        user: route.query.user,
    }),  },
  { path: '/get_data', name: 'get_data', component: Getdata , props:(route) =>({msg: route.query.message})},
  { path: '/axios', name: 'axios', component: Axios  }
];

// 建立路由實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;