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
        name: 'sales-product-view',
        component: () => import('@sale/views/Product/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sales-product-view'
        }
    },
    {
        path: '/sales/shipments',
        name: 'sales-shipment-view',
        component: () => import('@sale/views/Shipment/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sales-shipment-view'
        }
    },
    {
        path: '/sales/:id',
        name: 'sale-update',
        component: () => import('@sale/views/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-update'
        }
    },
]