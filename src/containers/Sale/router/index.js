export default [
    {
        path: '/sales/orders',
        name: 'order-view',
        component: () => import('@sale/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'order-view'
        }
    },
    {
        path: '/sales/products',
        name: 'product-view',
        component: () => import('@sale/views/Product/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'product-view'
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