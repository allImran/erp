export default [
    {
        path: '/account-settings',
        name: 'AccountSettings',
        component: () => import('@/views/page/menu/AccountSettings.vue'),
        meta: {
            requiresAuth: true,
        }
    }
]