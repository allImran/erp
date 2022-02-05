import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('../views/Email.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes,

  scrollBehavior(to, from, savedPosition) {
    // return savedPosition || new Promise((resolve) => {
    //   setTimeout(() => resolve({top: 0, behavior: 'smooth'}),  500)
    // })

    if(savedPosition) {
      return savedPosition;
    }else if(to.hash) {
      return  {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return  new Promise((resolve) => {
        setTimeout(() => resolve({top: 0, behavior: 'smooth'}),  500)
      })
    }
  },
})

export default router
