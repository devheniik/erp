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
    {
        path: '/product/:id',
        name: 'product-update',
        component: () => import('@product/views/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'product-update'
        }
    },
]