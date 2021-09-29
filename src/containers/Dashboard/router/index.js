export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('/src/components/Home.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: 'dashboard-view',
            uname: 'personu-gos_otchetu-gos_otchetu'
        }
    },
]