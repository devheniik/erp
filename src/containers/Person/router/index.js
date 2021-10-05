export default [
    {
        path: '/persons',
        name: 'persons-view',
        component: () => import('@person/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'persons-view'
        }
    },
    {
        path: '/persons/:id',
        name: 'persons-update',
        component: () => import('@person/views/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'persons-update'
        }
    },
]