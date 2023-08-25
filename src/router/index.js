// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Practicesample',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Practicesample.vue'),
      },
    ],
  },
  {
    path: '/MapDemo',
    name: 'MapDemo',
    component: () => import ('@/views/MapDemo.vue')
  },
  {
    path: '/MapActivity',
    name: 'MapActivity',
    component: () => import ('@/views/MapActivity.vue')
  },
  {
    path: '/MapSir',
    name: 'MapSir',
    component: () => import ('@/views/MapSir.vue')
  },
  {
    path: '/PrintLayout',
    name: 'PrintLayout',
    component: () => import ('@/views/PrintLayout.vue')
  },
  {
    path: '/CalendarView',
    name: 'CalendarView',
    component: () => import ('@/views/CalendarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
