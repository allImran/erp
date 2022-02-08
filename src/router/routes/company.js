export default [
    {
        path: '/company/:companyId',
        component: () => import('@/views/page/company/Home.vue'),
        name: 'Company',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'menu/:menuId',
                name: 'CompanySubmenu',
                component: () => import('@/views/page/company/Submenu.vue'),
            }
        ]
    }
]