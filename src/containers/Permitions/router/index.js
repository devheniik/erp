export default [
    {
        path: '/roles',
        name: 'roles-view',
        component: () => import('../views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'roles-view'
        }
    },
    // {
    //     path: '/persons/:id',
    //     name: 'person-update',
    //     component: () => import('@person/views/Update.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'person-update'
    //     }
    // },
]