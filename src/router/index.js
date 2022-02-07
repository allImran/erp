import { createRouter, createWebHistory } from 'vue-router'
import dashboard from './routes/dashboard'
import auth from './routes/auth'
import profile from './routes/profile'
import other from './routes/other'
import accountSettings from './routes/accountSettings'

const routes = [
  ...dashboard,
  ...auth,
  ...profile,
  ...other,
  ...accountSettings,
  {
    path: '/:pathMatch(.*)*',
    redirect: 'error-404',
  },
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
});

router.beforeEach((to, from, next) => { 
  window.document.title = to.meta && to.meta.title ? to.meta.title : 'Accounting';
  if(to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('token');
    if (token) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
});

export default router
