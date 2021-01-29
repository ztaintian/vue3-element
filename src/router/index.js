import {
  createWebHashHistory,
  createRouter
} from 'vue-router'
const routes = [{
    path: '/page1',
    component: () => import('../views/page1.vue')
  },
  {
    path: '/page2',
    component: () => import('../views/page2.vue')
  },
  {
    path: '/component',
    component: () => import('../views/component.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router