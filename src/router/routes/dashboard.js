export default [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/email',
        name: 'Email',
        component: () => import('@/views/Email.vue'),
    }
]