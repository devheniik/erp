export default [
    {
        path: '/products',
        name: 'product-view',
        component: () => import('@product/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'product-view'
        }
    },
    // {
    //     path: '/sales/products',
    //     name: 'sales-product-view',
    //     component: () => import('@sale/views/Product/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'sales-product-view'
    //     }
    // },
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