export default [
    // {
    //     path: '/finances/advance-reports',
    //     name: 'finance-view',
    //     component: () => import('@finance/views/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'finance-view'
    //     }
    // },
    // {
    //     path: '/sales/finances',
    //     name: 'sales-finance-view',
    //     component: () => import('@sale/views/finances/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'sales-finance-view'
    //     }
    // },
    {
        path: '/finance/advance-reports',
        name: 'finance-advance-reports-view',
        component: () => import('@finance/views/Advance/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'finance-advance-reports-view'
        }
    },
    {
        path: '/finance/advance-reports/:id',
        name: 'finance-advance-reports-update',
        component: () => import('@finance/views/Advance/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'finance-advance-reports-update'
        }
    },
    {
        path: '/finance/tax-invoices/:id',
        name: 'finance-tax-invoices-view',
        component: () => import('@finance/views/Tax/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'finance-tax-invoices-view'
        }
    },
]