export default [
    {
        path: '/roles',
        name: 'roles-view',
        component: () => import('../views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
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
    //         requreAuth: true,
    //         permition: null,
    //         uname: 'person-update'
    //     }
    // },
]