export default [
    // * sale
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

    // * products
    {
        path: '/sales/products',
        name: 'sale-product-view',
        component: () => import('@sale/views/Product/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-product-view'
        }
    },
    {
        path: '/sales/products/list',
        name: 'sale-product-update',
        component: () => import('@sale/views/Products/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-product-update'
        }
    },

    // * shipments

    {
        path: '/sales/shipments',
        name: 'sale-shipment-view',
        component: () => import('@sale/views/Shipment/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-shipment-view'
        }
    },

    // * firms
    {
        path: '/sales/firms',
        name: 'sale-firm-view',
        component: () => import('@firm/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-firm-view'
        }
    },

    {
        path: '/sales/firms/:id',
        name: 'sale-firm-update',
        component: () => import('@firm/views/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-firm-update'
        }
    },

    // * operations
    {
        path: '/sales/operations/658',
        name: 'sale-operation-658-view',
        component: () => import('../../../components/table/Viewer.vue'),
        props: {
            api: 'transactions/operation-types/get?operationTypes=658'
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-operation-658-view'
        }
    },

    {
        path: '/sales/operations/660',
        name: 'sale-operation-660-view',
        component: () => import('../../../components/table/Viewer.vue'),
        props: {
            api: 'transactions/operation-types/get?operationTypes=660'
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-operation-660-view'
        }
    },

    {
        path: '/sales/operations/657',
        name: 'sale-operation-657-view',
        component: () => import('../../../components/table/Viewer.vue'),
        props: {
            api: 'transactions/operation-types/get?operationTypes=657'
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-operation-657-view'
        }
    },

    {
        path: '/sales/operations/659',
        name: 'sale-operation-659-view',
        component: () => import('../../../components/table/Viewer.vue'),
        props: {
            api: 'transactions/operation-types/get?operationTypes=659'
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-operation-659-view'
        }
    },

    {
        path: '/sales/operations/754',
        name: 'sale-operation-754-view',
        component: () => import('../../../components/table/Viewer.vue'),
        props: {
            api: 'transactions/operation-types/get?operationTypes=754'
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-operation-754-view'
        }
    },

    {
        path: '/sales/operations/686',
        name: 'sale-operation-686-view',
        component: () => import('../../../components/table/Viewer.vue'),
        props: {
            api: 'transactions/operation-types/get?operationTypes=686'
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'sale-operation-686-view'
        }
    },

    

    // * utils
    {
        path: '/sales/zakaz/reserv',
        name: 'product-reserv',
        component: () => import('@sale/components/productreservation.vue'),
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null,
            uname: 'product-reserv'
        }
    },
]