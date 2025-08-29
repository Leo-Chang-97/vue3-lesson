import { createRouter, createWebHistory } from 'vue-router';
import NoteGrid from './components/NoteGrid.vue';
import NoteDetail from './components/NoteDetail.vue';
import EditNote from './components/EditNote.vue';
import SearchNote from './components/SearchNote.vue';
// 定義路由
const routes = [
  {
    path: '/',
    name: 'NoteGrid',
    component: NoteGrid,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: NoteDetail,
    props: true
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditNote, 
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: SearchNote, 
    props: true
  },
];

// 建立路由實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;