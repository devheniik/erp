export default [
    {
        path: '/operations',
        name: 'operation-view',
        component: () => import('@operation/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'operation-view'
        }
    },
    // {
    //     path: '/sales/operations',
    //     name: 'sales-operation-view',
    //     component: () => import('@sale/views/operation/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'sales-operation-view'
    //     }
    // },
    {
        path: '/operations/new/:params',
        name: 'operation-create',
        props: {
            api: 'business-transactions/adding'
        },
        component: () => import('../../../components/UCard.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'operation-update'
        }
    },
    {
        path: '/operation/:id',
        name: 'operation-update',
        props: {
            api: 'business-transactions/show'
        },
        component: () => import('../../../components/UCard.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'operation-update'
        }
    },
]