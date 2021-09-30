export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@dashboard/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: 'dashboard-view',
            uname: 'personu-gos_otchetu-gos_otchetu'
        }
    },
]