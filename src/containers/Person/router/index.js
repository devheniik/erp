export default [
    {
        path: '/persons',
        name: 'PersonsView',
        component: () => import('@person/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'persons-view'
        }
    },
]