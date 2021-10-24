export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@dashboard/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: 'dashboard-view',
            uname: 'dashboard'
        }
    },
    {
        path: '/d2',
        name: 'Home2',
        component: () => import('@dashboard/views/D2.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: 'dashboard-view',
            uname: 'dashboard-2'
        }
    },
]