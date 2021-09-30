export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('/src/components/Home.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: 'dashboard-view',
            uname: 'personu-gos_otchetu-gos_otchetu'
        }
    },
]