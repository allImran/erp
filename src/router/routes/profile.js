export default [
    {
        path: '/Profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
        meta: {
            requiresAuth: true,
        }
    }
]