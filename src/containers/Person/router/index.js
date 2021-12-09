export default [
    {
        path: '/persons',
        name: 'person-view',
        component: () => import('@person/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: null,
            uname: 'person-view'
        }
    },
    {
        path: '/persons/:id',
        name: 'person-update',
        component: () => import('@person/views/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: null,
            uname: 'person-update'
        }
    },
]