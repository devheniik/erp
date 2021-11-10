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
        path: '/operation/:id',
        name: 'operation-update',
        props: {
            api: 'business_transactions/show'
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